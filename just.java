import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
public class EventManagementApplication {

    public static void main(String[] args) {
        SpringApplication.run(EventManagementApplication.class, args);
    }
}

@Controller
class HomeController {

    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("pageTitle", "Event Management System");
        return "home";
    }
}