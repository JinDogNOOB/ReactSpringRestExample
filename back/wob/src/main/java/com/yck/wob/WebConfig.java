package com.yck.wob;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer{

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
        .allowedOrigins("http://localhost:3000", "http://127.0.0.1:3000", "*")
        .allowedHeaders("*")
        .allowedMethods(HttpMethod.POST.name(), HttpMethod.GET.name(), HttpMethod.OPTIONS.name(), HttpMethod.PUT.name(), HttpMethod.DELETE.name())
        .maxAge(1800);
    }



}
