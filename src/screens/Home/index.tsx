import { useState } from "react"
import { Text, TextInput, TouchableOpacity, View, FlatList, Alert } from 'react-native'
import { styles } from "./styles"
import { Participant } from '../../components/Participant'


export default function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')


  function handleParticipantAdd() {
    if (participants.includes("Iron")) {
      return Alert.alert("Participante já existe", "Esse participante já está na lista de participantes.")
    }

    setParticipants(participants => [...participants, participantName])
    setParticipantName('')
  }

  function handleParticipantRemove(name: string) {
    const participantRemoved = participants.filter(participant => participant !== name)
    Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => setParticipants(participantRemoved)
      },

      {
        text: "Não",
        style: "cancel"
      }

    ])

  }

  return (
    <View style={styles.container}>
      <Text
        style={styles.eventName}
      >Nome do Evento
      </Text>
      <Text style={styles.eventDate}
      >Segunda, 24 de Abril de 2023
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor='#6B6B6B'
          onChangeText={e => setParticipantName(e)}
          value={participantName}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd} disabled={!participantName}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) =>
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          () => (
            <Text style={styles.listEmptyText}>Ninguém chegou ainda? Adicione participantes a sua lista de presença.</Text>
          )
        }
      />

    </View>
  )
}
