import org.junit.Test
import org.junit.Assert.*

class ApplicationTest {

    @Test
    fun testFarmRegistration() {
        // Simulate farm registration process
        val farmName = "My Cattle Farm"
        val ownerName = "Muhammad Ali Khan"
        val email = "ali7847khan@gmail.com"
        val phoneNumber = "+923081454784"
        val city = "Lahore"
        val country = "Pakistan"

        val farm = Farm(farmName, ownerName, email, phoneNumber, city, country)
        
        // Perform assertions
        assertEquals(farmName, farm.name)
        assertEquals(ownerName, farm.ownerName)
        assertEquals(email, farm.email)
        assertEquals(phoneNumber, farm.phoneNumber)
        assertEquals(city, farm.city)
        assertEquals(country, farm.country)
    }

    @Test
    fun testDeliveryServiceOrderConfirmation() {
        // Simulate delivery service order confirmation
        val customerName = "John Doe"
        val orderItems = listOf("Milk", "Cheese", "Yogurt")
        val deliveryAddress = "113 Johar Town, Lahore"
        val contactNumber = "+923001234567"

        val order = DeliveryOrder(customerName, orderItems, deliveryAddress, contactNumber)
        
        // Perform assertions
        assertEquals(customerName, order.customerName)
        assertArrayEquals(orderItems.toTypedArray(), order.orderItems.toTypedArray())
        assertEquals(deliveryAddress, order.deliveryAddress)
        assertEquals(contactNumber, order.contactNumber)
    }

    @Test
    fun testCattleFarmDetails() {
        // Simulate cattle farm details retrieval
        val farmName = "My Cattle Farm"
        val farmLocation = "Lahore, Pakistan"
        val numberOfCattle = 50
        val ownerName = "Muhammad Ali Khan"

        val cattleFarm = CattleFarm(farmName, farmLocation, numberOfCattle, ownerName)
        
        // Perform assertions
        assertEquals(farmName, cattleFarm.farmName)
        assertEquals(farmLocation, cattleFarm.farmLocation)
        assertEquals(numberOfCattle, cattleFarm.numberOfCattle)
        assertEquals(ownerName, cattleFarm.ownerName)
    }
}
