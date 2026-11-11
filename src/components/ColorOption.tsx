import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

interface ColorOptionProps {
  colorCode: string;
  isSelected: boolean;
  onPress: () => void;
}

export default function ColorOption({ colorCode, isSelected, onPress }: ColorOptionProps) {
  return (
    <TouchableOpacity
      style={[
        styles.box,
        { backgroundColor: colorCode },
        isSelected && styles.selected,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    />
  );
}

const styles = StyleSheet.create({
  box: {
    width: 80,
    height: 75,
    marginVertical: 6,
  },
  selected: {
    borderWidth: 3,
    borderColor: '#FFD700',
  },
});