import { Box } from '@chakra-ui/layout';
import React from 'react';
import { CirclePicker } from 'react-color';
import { useDispatch } from 'react-redux';
import { changeColor } from '../../features/resumeSettingSlice/ResumeSettingSlice';

export default function ResumeColor() {
  const colors = [
    '#f44336',
    '#e91e63',
    '#9c27b0',
    '#673ab7',
    '#3f51b5',
    '#2196f3',
    '#03a9f4',
    '#00bcd4',
    '#009688',
    '#4caf50',
    '#8bc34a',
    '#cddc39',
  ];

  const dispatch = useDispatch();

  return (
    <Box w="auto">
      <CirclePicker
        onChangeComplete={(color, e) => dispatch(changeColor(color.hex))}
        colors={colors}
      />
    </Box>
  );
}
