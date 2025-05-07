import { View, Text, StyleSheet, Image } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://fotos-jornaldocarro-estadao.nyc3.cdn.digitaloceanspaces.com/uploads/2018/06/30151604/41545551-1160x773.jpg' }}
        style={styles.avatar}
      />
      <Text style={styles.name}>Username</Text>
      <Text style={styles.bio}>This is the user bio.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 16,
    color: 'gray',
    marginTop: 8,
    textAlign: 'center'
  },
});