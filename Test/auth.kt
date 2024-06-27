import org.junit.Test
import org.junit.Assert.*

class AuthTest {

    @Test
    fun testUserRegistration() {
        // Simulate user registration
        val email = "testuser@example.com"
        val password = "password123"

        val authService = AuthService()
        val result = authService.registerUser(email, password)
        
        // Perform assertions
        assertTrue(result.isSuccess)
        assertNotNull(result.user)
        assertEquals(email, result.user?.email)
    }

    @Test
    fun testUserLogin() {
        // Simulate user login
        val email = "testuser@example.com"
        val password = "password123"

        val authService = AuthService()
        val result = authService.loginUser(email, password)
        
        // Perform assertions
        assertTrue(result.isSuccess)
        assertNotNull(result.user)
        assertEquals(email, result.user?.email)
    }

    @Test
    fun testInvalidLogin() {
        // Simulate invalid login attempt
        val email = "testuser@example.com"
        val password = "wrongpassword"

        val authService = AuthService()
        val result = authService.loginUser(email, password)
        
        // Perform assertions
        assertFalse(result.isSuccess)
        assertNull(result.user)
        assertEquals("Invalid credentials", result.error)
    }
}
