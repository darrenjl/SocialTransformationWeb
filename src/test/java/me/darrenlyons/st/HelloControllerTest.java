package me.darrenlyons.st;

import junit.framework.Assert;
import me.darrenlyons.st.HelloController;
import org.junit.Before;
import org.junit.Test;

public class HelloControllerTest {

    private HelloController helloController;

    @Before
    public void setUp() throws Exception {
        helloController = new HelloController();
    }

    @Test
    public void testHelloController(){
        Assert.assertEquals("Greetings from Spring Boot!", helloController.index());
    }
}
