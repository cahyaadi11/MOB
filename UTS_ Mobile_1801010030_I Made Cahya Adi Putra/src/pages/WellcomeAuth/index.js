import React from 'react';
import { Image, Text, View } from 'react-native';
import { color } from 'react-native-reanimated';
import { wellcomeAuth } from '../../assets';
import { colors } from '../../utils';
import ActionButton from './ActionButton';

const WellcomeAuth = ({navigation}) => {
    const handleGoTo = screen => {
        navigation.navigate(screen);
    }
    return (
        <View style={styles.wrapper.page}>
            <Image source={wellcomeAuth} style={styles.wrapper.illustration} />
            <Text style={styles.text.wellcome}>Selamat Datang di Booking_Room</Text>
            <Text style={styles.text.subtext}>Sistem Pemesanan Ruangan</Text>
            <ActionButton desc="Masuk" title="Masuk" onPress={() => handleGoTo('Login')} />
            <ActionButton desc='Daftar Jika Belum Memiliki Akun' title="Daftar" onPress={() => handleGoTo('Register')} />
        </View>
    )
} 

const styles = {
    wrapper: {
        page: { 
            alignItems: 'center', 
            justifyContent: 'center', 
            flex: 1, 
            backgroundColor: '#fff' 
        },
        illustration: { 
            width: 219, 
            height: 117,
            marginBottom: 10 
        }
    },
    text: {
        wellcome: { 
            fontSize: 18, 
            fontWeight: 'bold', 
            color: colors.default
        },
        subtext: {
            fontSize: 13,
            color: colors.dark,
            marginBottom: 76
        }
    }
}

export default WellcomeAuth;