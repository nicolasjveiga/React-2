import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import StoryList from '../../../components/StoryList';
import PostCard from '../../../components/PostCard';
import { useRouter } from 'expo-router';
import { posts } from '../../../data/posts';

export default function FeedScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <StoryList />
      {posts.map((post) => (
        <TouchableOpacity
          key={post.id}
          onPress={() => router.push({
            pathname: '/tabs/feed/[postId]',
            params: { postId: post.id }
          })}
        >
          <PostCard title={post.title} location={post.location} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
