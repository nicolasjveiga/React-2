import { View, Text, StyleSheet, Image } from 'react-native';

interface PostCardProps {
  title: string;
  location: string;
}

export default function PostCard({ title, location }: PostCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
      <Image source={{ uri: 'https://fotos-jornaldocarro-estadao.nyc3.cdn.digitaloceanspaces.com/uploads/2018/06/30151604/41545551-1160x773.jpg' }} style={styles.avatar} />

        <View>
          <Text style={styles.username}>{title}</Text>
          <Text style={styles.location}>{location}</Text>
        </View>
      </View>

      <Image
        source={{ uri: 'https://fotos-jornaldocarro-estadao.nyc3.cdn.digitaloceanspaces.com/uploads/2018/06/30151604/41545551-1160x773.jpg' }}
        style={styles.postImage}
        resizeMode="cover"
    />


      <View style={styles.footer}>
        <Text style={styles.actions}>❤️ 💬 📤</Text>
        <Text style={styles.likes}>Curtido por <Text style={{ fontWeight: 'bold' }}>vw</Text>, <Text style={{ fontWeight: 'bold' }}>gm_opala</Text> e outras pessoas.</Text>
        <Text>
          <Text style={styles.username}>{title}</Text>
          <Text> <Text style={styles.hashtag}>#AirCooledSQN</Text> Pra quem pediu, está aí o besouro repousando no fim de tarde…</Text>
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
    width: 40, height: 40, borderRadius: 20, marginRight: 10,
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
