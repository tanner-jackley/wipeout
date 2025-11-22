import { HelloWave } from "@/components/hello-wave";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

export default function Index() {
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
      </ThemedView>
    </>
  );
}
