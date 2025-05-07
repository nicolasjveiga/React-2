import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function PostDetails() {
  const { postId } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Post ID: {postId}</Text>
      <Text style={styles.content}>This is the post { postId } content.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8
  },
  content: {
    fontSize: 16,
  },
});


