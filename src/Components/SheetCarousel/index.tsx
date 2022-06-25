import React, {useCallback, useState} from 'react';
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  useWindowDimensions,
} from 'react-native';
import Slide, {SheetItem} from './Slide';
import {Search} from '../../types';
import Box from '../Box';

export interface Sheet {
  month: number;
  year: number;
  total: string;
  items: SheetItem[];
}

export interface SheetCarouselProps {
  entries: Sheet[];
  onItemPress(item: Search): void;
}

const space = 16;

const SheetCarousel = React.forwardRef<FlatList, SheetCarouselProps>(
  ({entries, onItemPress}: SheetCarouselProps, ref) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const {width} = useWindowDimensions();

    const renderItem = ({item}: {item: Sheet}) => {
      return (
        <Slide
          {...item}
          onItemPress={onItemPress}
          // height={width * 1.1}
          width={width - space * 2}
          space={space}
        />
      );
    };

    const onScroll = useCallback(
      (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        const index = Math.round(
          e.nativeEvent.contentOffset.x / (width - space),
        );
        if (index !== activeIndex) {
          setActiveIndex(index);
        }
      },
      [activeIndex, width],
    );

    return (
      <Box>
        <FlatList
          keyExtractor={(item) => `${item.month}-${item.year}`}
          getItemLayout={(data, index) => ({
            length: width - space * 2,
            offset: (width - space) * index,
            index,
          })}
          onScroll={onScroll}
          contentContainerStyle={{paddingRight: space}}
          snapToInterval={width - space}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          horizontal
          ref={ref}
          data={entries}
          inverted
          renderItem={renderItem}
        />
        {entries?.length > 1 && (
          <Box
            position="absolute"
            bottom={-24}
            width="100%"
            justifyContent="center"
            flexDirection="row">
            {entries.map((_, i) => (
              <Box
                key={i}
                height={8}
                width={8}
                borderRadius={4}
                backgroundColor={
                  entries.length - i - 1 === activeIndex ? 'white' : '#ccc'
                }
                ml={i === 0 ? 0 : 4}
              />
            ))}
          </Box>
        )}
      </Box>
    );
  },
);

export default SheetCarousel;
