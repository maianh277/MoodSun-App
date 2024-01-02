import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Image } from 'react-native';
import tw from 'twrnc';

const SignUpForm = ({ email, setEmail, phone, setPhone, password, setPassword, confirmPassword, setConfirmPassword }) => {
    // Tạo hai biến trạng thái riêng biệt cho mật khẩu và xác nhận mật khẩu
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [confirmSecureTextEntry, setConfirmSecureTextEntry] = useState(true);

    return (
        <>
            <TextInput
                style={tw`border border-gray-300 p-4 rounded mb-2`}
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={setEmail}
                value={email}
            />
            <TextInput
                style={tw`border border-gray-300 p-4 rounded mb-2`}
                placeholder="Phone"
                keyboardType="phone-pad"
                onChangeText={setPhone}
                value={phone}
            />
            <View style={tw`flex-row items-center border border-gray-300 p-4 rounded mb-2`}>
                <TextInput
                    style={tw`flex-1`}
                    placeholder="Password"
                    secureTextEntry={secureTextEntry}
                    onChangeText={setPassword}
                    value={password}
                />
                <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
                    <Image
                        style={tw`w-6 h-6`}
                        source={secureTextEntry ? require('../assets/createTaskIcon/off.png') : require('../assets/createTaskIcon/view.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={tw`flex-row items-center border border-gray-300 p-4 rounded mb-4`}>
                <TextInput
                    style={tw`flex-1`}
                    placeholder="Confirm Password"
                    secureTextEntry={confirmSecureTextEntry}
                    onChangeText={setConfirmPassword}
                    value={confirmPassword}
                />
                <TouchableOpacity onPress={() => setConfirmSecureTextEntry(!confirmSecureTextEntry)}>
                    <Image
                        style={tw`w-6 h-6`}
                        source={confirmSecureTextEntry ? require('../assets/createTaskIcon/off.png') : require('../assets/createTaskIcon/view.png')}
                    />
                </TouchableOpacity>
            </View>
        </>
    );
};

export default SignUpForm;
