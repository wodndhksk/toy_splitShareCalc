package toy.splitShareCalc.discord;

import groovy.util.logging.Slf4j;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import toy.splitShareCalc.base.common.DiscordWebhook;

import java.io.IOException;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@Slf4j
public class DiscordTest {

    @Test
    @DisplayName("Discord 웹훅 테스트 성공")
    void webhookTest() throws IOException {
        String url = "https://discord.com/api/webhooks/1201078438438633482/qPth1G4iLITDhS9kJ5_lzhgfPgkoPhP0KYJYbDeu5Hk3_43YBzCkv3TiI7R8YbRxW-dk";
        DiscordWebhook webhook = new DiscordWebhook(url);
        boolean result = webhook.sendMsg("디스코드 테스트 알람");

        assertThat(result).isTrue();

    }
}
