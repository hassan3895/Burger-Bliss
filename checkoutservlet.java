import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;

public class CheckoutServlet extends HttpServlet {
    // Process the checkout data
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Set the content type for response
        response.setContentType("text/html");

        // Get data from the checkout form
        String name = request.getParameter("name");
        String address = request.getParameter("address");
        String paymentMethod = request.getParameter("payment");
        String productName = request.getParameter("product-name");
        String productPrice = request.getParameter("product-price");
        String productImg = request.getParameter("product-img");

        // Print the checkout confirmation
        PrintWriter out = response.getWriter();

        out.println("<html><body>");
        out.println("<h1>Thank You for Your Order, " + name + "!</h1>");
        out.println("<p>Delivery Address: " + address + "</p>");
        out.println("<p>Payment Method: " + paymentMethod + "</p>");
        out.println("<p>Product Ordered: " + productName + "</p>");
        out.println("<p>Price: Rs " + productPrice + "</p>");
        out.println("<p>Your order has been successfully placed!</p>");
        out.println("</body></html>");
    }
}
