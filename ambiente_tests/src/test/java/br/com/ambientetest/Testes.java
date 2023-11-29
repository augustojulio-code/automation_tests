package br.com.ambientetest;

import static org.junit.Assert.assertEquals;

import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Testes {

    @Before
    public void setUp() {

    }

    @Test
    public void openPage() {
        WebDriver driver = new ChromeDriver();

        driver.get("https://www.google.com");
    }

}
