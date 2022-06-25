import React from 'react';

import Text from '../Components/Text';
import Box from '../Components/Box';
import Button from '../Components/Button';
import ChevronLeft from '../Icons/ChevronLeft';
import Layout from '../Layouts/Main';
import ActivityIndicator from '../Components/ActivityIndicator';
import {FAQ as FAQType, FAQNode, FAQTopic} from '../API';
import {
  FlatList,
  Pressable,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import Cup from '../Illustrations/Cup';
import Pig from '../Illustrations/Pig';
import Bulb from '../Illustrations/Bulb';
import {useTheme} from 'styled-components/native';

export interface FAQProps {
  title: string;
  onBackBtnPress(): void;
  isFetching: boolean;
  faq: FAQType | undefined;
  onItemPress(item: FAQNode | FAQTopic): void;
}

const IconsForTopic: Record<string, JSX.Element> = {
  CUP: <Cup height={60} />,
  PIG: <Pig height={60} />,
  BULB: <Bulb height={60} />,
};

const FAQ = ({
  title,
  faq,
  onBackBtnPress,
  isFetching,
  onItemPress,
}: FAQProps) => {
  const {width} = useWindowDimensions();
  const theme: any = useTheme();

  return (
    <Layout
      top={
        <Box
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="center">
          <Box position="absolute" left={0}>
            <Button variant="transparent" onPress={onBackBtnPress}>
              <Box width={24} height={24}>
                <ChevronLeft />
              </Box>
            </Button>
          </Box>

          <Box height={32}>
            <Text color="white" fontSize={22} fontWeight={700}>
              {title}
            </Text>
          </Box>
        </Box>
      }>
      <Box flex={1} px={18} py={12}>
        {isFetching && (
          <Box flex={1} alignItems="center" justifyContent="center">
            <ActivityIndicator />
          </Box>
        )}
        {!isFetching && !!faq && (
          <FlatList
            ListHeaderComponent={() => (
              <Box
                flexDirection="row"
                flexWrap="wrap"
                justifyContent="space-between">
                {faq.topics.map((topic) => (
                  <Pressable
                    key={topic.title}
                    onPress={() => onItemPress(topic)}
                    style={({pressed}) => [
                      {
                        borderRadius: 16,
                        backgroundColor: pressed
                          ? '#2097FF'
                          : theme.colors.modal,
                        marginBottom: 16,
                      },
                    ]}>
                    <Box flex={1} p={16} width={(width - 48) / 2}>
                      <Text
                        fontSize={18}
                        fontWeight="800"
                        color="white"
                        textAlign="center">
                        {topic.title}
                      </Text>
                      <Box
                        flex={1}
                        alignItems={'center'}
                        justifyContent={'center'}
                        mt={24}>
                        {IconsForTopic[topic.icon]}
                      </Box>
                    </Box>
                  </Pressable>
                ))}
              </Box>
            )}
            data={faq.nodes}
            keyExtractor={(item) => item.title}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => onItemPress(item)}>
                <Box borderBottomWidth={1} borderBottomColor="white" py={16}>
                  <Text color="white" fontSize={18} fontWeight={'600'}>
                    {item.title}
                  </Text>
                </Box>
              </TouchableOpacity>
            )}
          />
        )}
      </Box>
    </Layout>
  );
};

export default FAQ;
