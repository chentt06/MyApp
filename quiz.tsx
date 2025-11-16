import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";

export default function InterestsScreen() {
  const [major, setMajor] = useState(null);
  const [hobbies, setHobbies] = useState([]);
  const [topics, setTopics] = useState([]);
  const [movie, setMovie] = useState([]);
  const [music, setMusic] = useState([]);

  const majors = ["Engineering", "BSOS", "Social Sciences", "Humanities", "Applied Sciences", "Art", "Pre-Med", "Pre-Law", "Undecided"];
  const hobbiesList = ["Art", "Hiking", "Watching Movies", "Music", "Gaming", "Reading"];
  const topicsList = ["Movies", "TV Shows", "Gossip", "Sports", "Books", "Anything"];
  const movieList = ["Action", "Romance", "Thriller", "Horror", "Documentary", "Super hero", "Fantasy", "Sci-fi"];
  const musicList = ["Pop", "Hip Hop", "Country", "Rap", "Rock", "Classical", "Lofi", "R&B", "K-Pop", "Other"];

  const toggleSelection = (list, setList, item) => {
    if (list.includes(item)) {
      setList(list.filter((i) => i !== item));
    } else {
      setList([...list, item]);
    }
  };


    {/*Add more questions*/}
  return (
    <ScrollView contentContainerStyle={{ paddingTop: 60, paddingHorizontal: 10 }} style={{ flex: 1, padding: 20 }}>
       <Text style={{ textAlign: "center", fontStyle: "italic", fontSize: 30, fontWeight: "bold", marginBottom: 30}}>
        Pick Your Interests
        </Text>
      {/* Question 1*/}
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        What is your major?
      </Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {majors.map((m) => (
          <TouchableOpacity
            key={m}
            onPress={() => setMajor(m)}
            style={{
              backgroundColor: major === m ? "#C94842" : "#eee",
              padding: 10,
              borderRadius: 20,
              margin: 5,
            }}
          >
            <Text style={{ color: major === m ? "white" : "black" }}>{m}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/*Question 2*/}
      <Text style={{ fontSize: 20, fontWeight: "bold", marginVertical: 15 }}>
        What are your hobbies?
      </Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {hobbiesList.map((h) => (
          <TouchableOpacity
            key={h}
            onPress={() => toggleSelection(hobbies, setHobbies, h)}
            style={{
              backgroundColor: hobbies.includes(h) ? "#C94842" : "#eee",
              padding: 10,
              borderRadius: 20,
              margin: 5,
            }}
          >
            <Text style={{ color: hobbies.includes(h) ? "white" : "black" }}>{h}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/*Question 3*/}
      <Text style={{ fontSize: 20, fontWeight: "bold", marginVertical: 15 }}>
        What do you want to talk about?
      </Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {topicsList.map((t) => (
          <TouchableOpacity
            key={t}
            onPress={() => toggleSelection(topics, setTopics, t)}
            style={{
              backgroundColor: topics.includes(t) ? "#C94842" : "#eee",
              padding: 10,
              borderRadius: 20,
              margin: 5,
            }}
          >
            <Text style={{ color: topics.includes(t) ? "white" : "black" }}>{t}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/*Question 4*/}
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        What is your favorite movie genre?
      </Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {movieList.map((m) => (
          <TouchableOpacity
            key={m}
            onPress={() => toggleSelection(movie, setMovie, m)}
            style={{
              backgroundColor: movie.includes(m) ? "#C94842" : "#eee",
              padding: 10,
              borderRadius: 20,
              margin: 5,
            }}
          >
             <Text style={{ color: movie.includes(m) ? "white" : "black" }}>{m}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/*Question 5*/}
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        What is your favorite music genre?
      </Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {musicList.map((e) => (
          <TouchableOpacity
            key={e}
            onPress={() => toggleSelection(music, setMusic, e)}
            style={{
              backgroundColor: music.includes(e) ? "#C94842" : "#eee",
              padding: 10,
              borderRadius: 20,
              margin: 5,
            }}
          >
             <Text style={{ color: music.includes(e) ? "white" : "black" }}>{e}</Text>
          </TouchableOpacity>
        ))}
      </View>
      
      <TouchableOpacity
  style={{
    backgroundColor: "#C94842",
    paddingVertical: 15,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 30,
  }}
  onPress={() => navigation.navigate("Login")}
>
  <Text style={{ color: "white", fontWeight: "bold" }}>Go to Login</Text>
</TouchableOpacity>

    </ScrollView>
  );
}
