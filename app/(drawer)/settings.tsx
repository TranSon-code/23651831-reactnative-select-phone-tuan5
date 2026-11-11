import React, { useState } from 'react';
import { StyleSheet, View, Text, Switch } from 'react-native';

export default function DrawerSettingsScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Chế độ nền tối (Dark Mode)</Text>
          <Text style={styles.desc}>Tự động chuyển giao diện sang màu tối</Text>
        </View>
        <Switch
          value={isDarkMode}
          onValueChange={setIsDarkMode}
          thumbColor={isDarkMode ? '#1976D2' : '#F4F3F4'}
          trackColor={{ false: '#767577', true: '#90CAF9' }}
        />
      </View>

      <View style={styles.row}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Nhận thông báo (Push Notifications)</Text>
          <Text style={styles.desc}>Nhận tin nhắn cập nhật và thông báo mới</Text>
        </View>
        <Switch
          value={isNotificationsEnabled}
          onValueChange={setIsNotificationsEnabled}
          thumbColor={isNotificationsEnabled ? '#1976D2' : '#F4F3F4'}
          trackColor={{ false: '#767577', true: '#90CAF9' }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF', padding: 20 },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  textContainer: { flex: 1, paddingRight: 16 },
  title: { fontSize: 16, fontWeight: 'bold', color: '#212121' },
  desc: { fontSize: 13, color: '#757575', marginTop: 4 },
});