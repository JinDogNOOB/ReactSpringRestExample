package com.yck.wob.config.security;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.yck.wob.config.security.filter.CustomAuthenticationFilter;
import com.yck.wob.config.security.filter.JWTAuthorizationFilter;
import com.yck.wob.config.security.handler.CustomLoginSuccessHandler;
import com.yck.wob.config.security.provider.CustomAuthenticationProvider;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter{
    @Autowired CustomAuthenticationProvider customAuthenticationProvider;
    /* ############################## Override ################################### */
    /**
     * 직접 구현한 AccountAuthentcaitonProvider를 매니저에 포함
     */
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
       auth.authenticationProvider(customAuthenticationProvider);
    }

    // 정적 자원에 대해서 security 적용하지 않음
    @Override
    public void configure(WebSecurity web) {
        web.ignoring().requestMatchers(PathRequest.toStaticResources().atCommonLocations());
    }

    // 어떤 url이 보호되어야하고 어떤것이 보호안되도 되는지 정의
    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http
        .httpBasic().disable()
        .cors()
            .configurationSource(corsConfigurationSource())
            .and()
        .csrf().disable()
        .authorizeRequests()
        .antMatchers("/admin/**")
            .hasRole("ADMIN")
        .antMatchers(HttpMethod.GET, "/board").permitAll()
        .antMatchers(HttpMethod.GET, "/board/*").permitAll()
        .antMatchers(HttpMethod.GET, "/board/*/post").permitAll()
        .antMatchers(HttpMethod.GET, "/board/*/post/*").permitAll()
        .antMatchers(HttpMethod.GET, "/board/*/post/*/sub").permitAll()
        .antMatchers(HttpMethod.PUT, "/user").permitAll()
        .antMatchers(HttpMethod.POST, "/user").permitAll()
        .antMatchers(HttpMethod.GET, "/user").permitAll()
        .anyRequest()
            .authenticated()
            .and()
        .formLogin()
            .disable()
        .sessionManagement()
            .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            .and()
        .logout()
            .logoutRequestMatcher(new AntPathRequestMatcher("/logout", "GET"))
            //.logoutUrl("/logout")
            .permitAll()
            .and()
            .addFilterBefore(customAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class)
            .addFilter(jwtAuthorizationFilter());

    }




    /* ############################## BEAN ####################################### */
    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
        // return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    @Bean
    public CustomAuthenticationFilter customAuthenticationFilter() throws Exception{
        CustomAuthenticationFilter customAuthenticationFilter = new CustomAuthenticationFilter(authenticationManager());
        customAuthenticationFilter.setFilterProcessesUrl("/user/login");
        customAuthenticationFilter.setAuthenticationSuccessHandler(customLoginSuccessHandler());
        customAuthenticationFilter.afterPropertiesSet();
        return customAuthenticationFilter;
    }

    @Bean
    public JWTAuthorizationFilter jwtAuthorizationFilter() throws Exception{
        return new JWTAuthorizationFilter(authenticationManager());
    }

    @Bean
    public CustomLoginSuccessHandler customLoginSuccessHandler(){
        return new CustomLoginSuccessHandler();
    }

    // https://toycoms.tistory.com/37
    // cors 정책 설정
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        List<String> allowedMethods = new ArrayList<>(Arrays.asList("GET", "POST", "PUT", "DELETE"));
        configuration.addAllowedOrigin("*");
        configuration.addAllowedHeader("*");
        // configuration.addAllowedMethod("*");
        configuration.setAllowedMethods(allowedMethods);
        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}

