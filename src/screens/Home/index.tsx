import { Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native'
import { styles } from "./styles"
import { Participant } from '../../components/Participant'


export default function Home() {
  const participants = ["King", "Saryta", "Floquinho", "Iron", "Breguita", "Algodão", "Nero", "Neguinha", "Mel"]

  function handleParticipantAdd() {
    console.log('Você clicou no botão de adicionar')
  }

  function handleParticipantRemove(name: string) {
    console.log(`Vocé clicou no botão de remover ${name}`)
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
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={[]}
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
