package br.com.ambientetest;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

/**
 * Unit test for simple App.
 */
public class AppTest {
    /**
     * Rigorous Test :-)
     */
    @Test
    public void shouldAnswerWithTrue() {
        assertTrue(true);
    }

    @Test
    public void helloTest() {
        String texto = "Olá imbecil";
        assertEquals("Olá imbecil", texto);
    }

    @Test
    public void testtest() {
        WebDriver driver = new ChromeDriver();

        driver.get("https://www.google.com");
    }
}
