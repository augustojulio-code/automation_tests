package br.com.ambientetest;

import static org.junit.Assert.assertEquals;

import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class Testes {

    @Before
    public void setUp() {

        System.setProperty("webdriver.chrome.driver", "src\\drive\\chrome.exe");

    }

    @Test
    public void openPage() {
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--start-maximized");
        WebDriver driver = new ChromeDriver(options);

        driver.get("https://www.google.com.br/");
    }

}
