class LoginService {
    fun loginUser(email: String, password: String): LoginResult {
        // Simulate login logic
        if (isValidCredentials(email, password)) {
            val user = getUserByEmail(email)
            return LoginResult.Success(user)
        } else {
            return LoginResult.Failure("Invalid credentials")
        }
    }

    private fun isValidCredentials(email: String, password: String): Boolean {
        // Check against database or authentication service
        // Replace with actual authentication logic
        val validEmail = "testuser@example.com"
        val validPassword = "password123"
        return email == validEmail && password == validPassword
    }

    private fun getUserByEmail(email: String): User {
        // Fetch user details from database
        // Replace with actual user retrieval logic
        return User(1, "Test User", email)
    }
}

sealed class LoginResult {
    data class Success(val user: User) : LoginResult()
    data class Failure(val error: String) : LoginResult()
}

data class User(val id: Long, val name: String, val email: String)
