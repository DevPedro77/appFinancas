import React, {useState} from 'react';

import { Background, Input, SubmitButton, SubmitText } from './style';
import { SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Header from '../../components/Header'

export default function RegisterForm(){
  const [labelInput, setLabelInput] =useState('');
  const [valueInput, setValueInput] =useState('');
  const [type, setType] =useState('Receita');
  return(
    <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() } >
      <Background>
        <Header title="Registrando" />

        <SafeAreaView style={{marginTop: 14, alignItems: 'center' }}>
          <Input
            placeholder="Descrição desse registro"
            value={labelInput}
            onChangeText={ (text) =>setLabelInput(text)}
          />

          <Input
            placeholder="Valor desejado"
            keyboardType="numeric"
            value={valueInput}
            onChangeText={ (text) => setValueInput(text)}
          />

          <SubmitButton>
            <SubmitText>Registrar</SubmitText>
          </SubmitButton>

        </SafeAreaView>
      </Background>
    </TouchableWithoutFeedback>
  )
}