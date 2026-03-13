import React from 'react';
import { Image, Text, View } from 'react-native';

function App() {
  return (
    <View style={{ 
      flex: 1,
      backgroundColor: '#F8F8FF',
      alignItems: 'center',
      paddingTop: 40,
      margin: 5
    }}>

      <Image 
        source={require('./img/sushi.png')} 
        style={{ 
          width: 200, 
          height: 200, 
          borderColor:'#4682B4', 
          borderWidth: 5, 
          borderRadius: 10,
          marginBottom: 20
        }} 
      />

      <Text style={{ 
        fontSize: 25, 
        fontWeight: 'bold', 
        color: '#4682B4',
        marginBottom: 15,
        textDecorationLine: 'underline' 
      }}>
        Sushi House
      </Text>

      <Text style={{ 
        fontSize: 15, 
        color: '#1C1C1C',  
        textAlign: 'justify',
        marginHorizontal: 25,
        marginBottom: 40,
        fontStyle: 'italic'
      }}>
        Sushi House é o lugar perfeito para quem aprecia a autêntica culinária japonesa. Com ingredientes frescos, pratos preparados com cuidado e um ambiente acolhedor, oferecemos desde sushis tradicionais até combinações especiais para tornar cada refeição uma experiência única. 🍣
      </Text>

      <View style={{ 
        flexDirection: 'row',
        gap: 1
      }}>

        <View style={{
          backgroundColor: '#4682B4',
          paddingVertical: 10,
          paddingHorizontal: 25,
          borderRadius: 20
        }}>
          <Text style={{ color: '#20232A', fontSize: 16, fontWeight: 'bold' }}>
            Cardápio
          </Text>
        </View>

        <View style={{
          backgroundColor: '#4682B4',
          paddingVertical: 10,
          paddingHorizontal: 25,
          borderRadius: 20
        }}>
          <Text style={{ color: '#20232A', fontSize: 16, fontWeight: 'bold' }}>
            Login
          </Text>
        </View>

      </View>

    </View>
  );
}

export default App;
