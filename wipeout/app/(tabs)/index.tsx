import { HelloWave } from "@/components/hello-wave";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Button } from "react-native";
import * as SMS from "expo-sms";

export default function Index() {
  const sendSMS = async () => {
    const isAvailable = await SMS.isAvailableAsync();
    if (!isAvailable) {
      alert("SMS is not available on this device");
      return;
    }

    const { result } = await SMS.sendSMSAsync(
      ["4178247391"], // phone numbers
      "Hello from my Expo app!"
    );

    console.log("SMS result:", result);
  };
  return (
    <>
      <ThemedView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <HelloWave />
        <ThemedText>Hello World!</ThemedText>
        <Button
          title="Send Text"
          onPress={sendSMS}
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </ThemedView>
    </>
  );
}
