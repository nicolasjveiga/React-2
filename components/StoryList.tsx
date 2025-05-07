import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { stories } from '../data/stories';


export default function StoryList() {
  return (
    <ScrollView horizontal ={true} style={styles.container}>
      {stories.map((story) => (
        <View key={story.id} style={styles.story}>
          <Image source={{ uri: story.avatar }} style={styles.avatar} />
          <Text style={styles.name}>{story.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    marginBottom: 10,
  },
  story: {
    alignItems: 'center',
    marginHorizontal: 8,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#ff3e57',
  },
  name: {
    fontSize: 12,
    marginTop: 4,
  },
});
