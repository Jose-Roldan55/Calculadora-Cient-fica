import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [disOperacion, setOperacion] = useState('');
  const [disOperacion2, setOperacion2] = useState('');
  const [disResultado, setResultado] = useState('');

  const limpiar = () => {
    setOperacion('');
    setResultado('');
  };

  const porciento = () => {
    
  };

  const datos = (value) => {
    setOperacion(disOperacion + value);
  };

  return (
    <View style={estilos.ppal}>
     <View style={estilos.xxd}>
            <TouchableOpacity style={estilos.dx}>
              <Text style={estilos.xd}>Cientifica</Text>
           </TouchableOpacity>
            
          </View>
      <View style={estilos.display}>
        <View>
          <Text style={[estilos.txtBtnL, { textAlign: 'right', fontSize: 20 }]}>
            {disOperacion}
          </Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-start',
              justifyContent: 'center',
            }}>
            <Text style={estilos.txtBtnL}>R</Text>
          </View>
          <View
            style={{
              flex: 8,
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}>
            <Text style={[estilos.txtBtnL, { color: '#2231A8' }]}>
              {disResultado}
            </Text>
          </View>
        </View>
      </View>
      <View style={estilos.panel}>
        <View style={{ flex: 4 }}>
         
          <View style={[estilos.estres, { flex: 1 }]}>
            
            <TouchableOpacity
              style={estilos.btnOp}
              onPress={() => {
                setResultado(Math.tan(disOperacion));
              }}>
              <Text style={estilos.txtBtn}>Tan</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={estilos.btnOp}
              onPress={() => {
                setResultado(Math.cos(disOperacion));
              }}>
              <Text style={estilos.txtBtn}>Cos</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={estilos.btnOp}
              onPress={() => {
                setResultado(Math.sin(disOperacion));
              }}>
              <Text style={estilos.txtBtn}>Sin</Text>
            </TouchableOpacity>
          </View>
          <View style={[estilos.estres, { flex: 1 }]}>
            
            <TouchableOpacity
              style={estilos.btnOp}
              onPress={() => {
                setResultado(Math.sqrt(disOperacion));
              }}>
              <Text style={estilos.txtBtn}>²√x</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={estilos.btnOp}
              onPress={() => {
                setResultado(Math.log10(disOperacion));
              }}>
              <Text style={estilos.txtBtn}>Log</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={estilos.btnOp}
              onPress={() => {
                setResultado(Math.floor(disOperacion));
              }}>
              <Text style={estilos.txtBtn}>R</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={estilos.btnOp}
              onPress={() => {
                setResultado(1/(disOperacion));
              }}>
              <Text style={estilos.txtBtn}>¹/ₓ</Text>
            </TouchableOpacity>
          </View>
          <View style={[estilos.estres, { flex: 1 }]}>
            
            
            <TouchableOpacity
              style={estilos.btnOp}
              onPress={() => {
                setResultado((disOperacion)*(disOperacion));
              }}>
              <Text style={estilos.txtBtn}>x²</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={estilos.btnOp}
              onPress={() => {
                datos('/100*');
              }}>
              <Text style={estilos.txtBtn}>%</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={estilos.btnOp}
              onPress={() => {
                limpiar();
              }}>
              <Text style={estilos.txtBtn}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={estilos.btnOp}
              onPress={() => {
                datos('/');
              }}>
              <Text style={estilos.txtBtn}>÷</Text>
            </TouchableOpacity>
          </View>

          <View style={estilos.renglon}>
            <TouchableOpacity
              style={estilos.btnNum}
              onPress={() => {
                datos('7');
              }}>
              <Text style={estilos.txtBtnL}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={estilos.btnNum}
              onPress={() => {
                datos('8');
              }}>
              <Text style={estilos.txtBtnL}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={estilos.btnNum}
              onPress={() => {
                datos('9');
              }}>
              <Text style={estilos.txtBtnL}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={estilos.btnOp}
              onPress={() => {
                datos('*');
              }}>
              <Text style={estilos.txtBtn}>×</Text>
            </TouchableOpacity>
            
          </View>
          <View style={estilos.renglon}>
            <TouchableOpacity
              style={estilos.btnNum}
              onPress={() => {
                datos('4');
              }}>
              <Text style={estilos.txtBtnL}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={estilos.btnNum}
              onPress={() => {
                datos('5');
              }}>
              <Text style={estilos.txtBtnL}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={estilos.btnNum}
              onPress={() => {
                datos('6');
              }}>
              <Text style={estilos.txtBtnL}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={estilos.btnOp}
              onPress={() => {
                datos('-');
              }}>
              <Text style={estilos.txtBtn}>−</Text>
            </TouchableOpacity>
            
            
          </View>
          <View style={estilos.renglon}>
            <TouchableOpacity
              style={estilos.btnNum}
              onPress={() => {
                datos('1');
              }}>
              <Text style={estilos.txtBtnL}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={estilos.btnNum}
              onPress={() => {
                datos('2');
              }}>
              <Text style={estilos.txtBtnL}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={estilos.btnNum}
              onPress={() => {
                datos('3');
              }}>
              <Text style={estilos.txtBtnL}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={estilos.btnOp}
              onPress={() => {
                datos('+');
              }}>
              <Text style={estilos.txtBtn}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={estilos.renglon}>
            <TouchableOpacity
              style={estilos.btnOp}
              onPress={() => {
                setResultado((disOperacion)*(-1));
              }}>
              <Text style={estilos.txtBtn}>+/-</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={estilos.btnNum}
              onPress={() => {
                datos('0');
              }}>
              <Text style={estilos.txtBtnL}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={estilos.btnNum}
              onPress={() => {
                datos('.');
              }}>
              <Text style={estilos.txtBtnL}>.</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={estilos.btnOp}
              onPress={() => {
                setResultado(eval(disOperacion));
              }}>
              <Text style={estilos.txtBtn}>=</Text>
            </TouchableOpacity>
            
          </View>
        </View>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  ppal: { flex: 1, backgroundColor: '#f0000', padding: 10 },
  display: {
    flex: 2,
    borderWidth: 1,
    borderColor: 'black',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    padding: 4,
    backgroundColor: 'white',
  },
  panel: { flex: 8, flexDirection: 'row' },
  estres: { margin: 2, flexDirection: 'row' },
  btnOp: {
    flex: 1,
    margin: 3,
    borderColor: 'bleck',
    backgroundColor: '#DAF7A6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  dx: {
    flex: 1,
    backgroundColor: 'blue',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  xd: { color: '#EBEAE7', fontWeight: 'bold', fontSize: 13 },
  xxd: { marginBottom: 4, flexDirection: 'row', height: 23, width: 100,},
  btnNum: {
    flex: 1,
    borderWidth: 1,
    margin: 5,
    borderColor: 'black',
    backgroundColor: '#FF5733',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtBtn: { color: 'black', fontWeight: 'bold', fontSize: 20 },
  txtBtnL: { fontWeight: 'bold', fontSize: 15 },
  renglon: { flex: 1, margin: 2, flexDirection: 'row' },
});