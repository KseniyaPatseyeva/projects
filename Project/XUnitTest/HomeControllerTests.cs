using Microsoft.AspNetCore.Mvc;
using Project.Controllers;
using Xunit;

namespace XUnitTest
{
    public class HomeControllerTests
    {
        [Fact]
        public void IndexViewResultNotNull()
        {
            // Arrange
            var controller = new HomeController();

            // Act
            var result = controller.Index() as ViewResult;

            // Assert
            Assert.NotNull(result);
        }


    }
}
