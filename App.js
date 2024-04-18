import { useState } from "react";
import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native";

export default function App() {
  const [inputText, setInputText] = useState("");
  const handleButtonClick = () => {
    console.log("Nilai input:", inputText);
    alert(`hai ${inputText}!`);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>hai aku eli!</Text>

      <Image
        style={styles.image}
        source={{
          uri: "https://cdns.klimg.com/resized/670x/g/p/o/potret_eli_jkt48_mojang_sunda_pemecah_suasana_dengan_sejuta_lawakan/p/jkt48_eli-20231128-006-non_fotografer_kly.jpg",
        }}
      />

      <TextInput style={styles.input} placeholder="kalo kamu siapa?" onChangeText={(text) => setInputText(text)} value={inputText} />
      <Button title= 'kirim' onPress={handleButtonClick}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  text:{
    fontSize: 20,
    marginBottom: 10
  },
  image:{
    width: 200,
    height: 200,
    marginBottom: 10
  },
  input:{
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
    width: 200
  }
});
