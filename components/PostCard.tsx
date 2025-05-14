import { View, Text, StyleSheet, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


interface PostCardProps {
  title: string;
  location: string;
  image: string;
  likes?: string | string[];
  hashtags?: string | string[];
  description?: string;
}

export default function PostCard({ title, location, image, likes, hashtags, description }: PostCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
      <Image source={{ uri: image }} style={styles.avatar} />

        <View>
          <Text style={styles.username}>{title}</Text>
          <Text style={styles.location}>{location}</Text>
        </View>
      </View>

      <Image
        source={{ uri: image }}
        style={styles.postImage}
        resizeMode="cover"
    />


      <View style={styles.footer}>
        
        <View style={styles.actions}>
          <FontAwesome name="heart-o" size={20} color="#000" style={{ marginRight: 10 }} />
          <FontAwesome name="comment-o" size={20} color="#000" style={{ marginRight: 10 }} />
          <FontAwesome name="share-square-o" size={20} color="#000" />
        </View>

        <Text style={styles.likes}>Curtido por <Text style={styles.username}>{likes}</Text> e outras pessoas.</Text>
        <Text>
          <Text style={styles.username}>{title}</Text>
          <Text> <Text style={styles.hashtag}>{hashtags}</Text>{description}</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 8,
    overflow: 'hidden',
  },
  
  header: {
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center',
  },
  avatar: {
    width: 40, 
    height: 40, 
    borderRadius: 20, 
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
  },
  location: {
    fontSize: 12,
    color: 'gray',
  },
  imagePlaceholder: {
    height: 200,
    backgroundColor: '#ccc',
  },
  footer: {
    padding: 12,
  },
  actions: {
  flexDirection: 'row',
  fontSize: 20,
  marginBottom: 6,
  },
  likes: {
    marginBottom: 4,
  },
  hashtag: {
    color: '#3b82f6',
  },
  postImage: {
    width: '100%',
    height: 300,
  },
});
