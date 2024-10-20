import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handlePress = (value) => {
    setInput(input + value);
  };

  const calculateResult = () => {
    try {
      setResult(eval(input));
    } catch (e) {
      setResult("Error");
    }
  };

  const clear = () => {
    setInput("");
    setResult(null);
  };

  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-gray-100">
      <View className="w-72 p-5 bg-white rounded-lg shadow-lg">
        <Text className="text-3xl text-right mb-4">{input}</Text>
        <Text className="text-3xl text-right text-gray-500 mb-4">
          {result !== null ? `= ${result}` : ""}
        </Text>

        <View className="flex-row justify-between mb-3">
          <TouchableOpacity
            onPress={() => clear()}
            className="bg-red-500 p-4 rounded-lg flex-1 mx-1"
          >
            <Text className="text-white text-2xl text-center">C</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handlePress("/")}
            className="bg-gray-300 p-4 rounded-lg flex-1 mx-1"
          >
            <Text className="text-2xl text-center">/</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handlePress("*")}
            className="bg-gray-300 p-4 rounded-lg flex-1 mx-1"
          >
            <Text className="text-2xl text-center">*</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handlePress("-")}
            className="bg-gray-300 p-4 rounded-lg flex-1 mx-1"
          >
            <Text className="text-2xl text-center">-</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-between mb-3">
          {[7, 8, 9].map((num) => (
            <TouchableOpacity
              key={num}
              onPress={() => handlePress(num.toString())}
              className="bg-gray-200 p-4 rounded-lg flex-1 mx-1"
            >
              <Text className="text-2xl text-center">{num}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View className="flex-row justify-between mb-3">
          {[4, 5, 6].map((num) => (
            <TouchableOpacity
              key={num}
              onPress={() => handlePress(num.toString())}
              className="bg-gray-200 p-4 rounded-lg flex-1 mx-1"
            >
              <Text className="text-2xl text-center">{num}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View className="flex-row justify-between mb-3">
          {[1, 2, 3].map((num) => (
            <TouchableOpacity
              key={num}
              onPress={() => handlePress(num.toString())}
              className="bg-gray-200 p-4 rounded-lg flex-1 mx-1"
            >
              <Text className="text-2xl text-center">{num}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View className="flex-row justify-between mb-3">
          <TouchableOpacity
            onPress={() => handlePress("0")}
            className="bg-gray-200 p-4 rounded-lg flex-1 mx-1"
          >
            <Text className="text-2xl text-center">0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handlePress(".")}
            className="bg-gray-200 p-4 rounded-lg flex-1 mx-1"
          >
            <Text className="text-2xl text-center">.</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={calculateResult}
            className="bg-blue-500 p-4 rounded-lg flex-1 mx-1"
          >
            <Text className="text-white text-2xl text-center">=</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handlePress("+")}
            className="bg-gray-300 p-4 rounded-lg flex-1 mx-1"
          >
            <Text className="text-2xl text-center">+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
