import React, {ReactElement, useEffect, useRef, useState} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import {Dimensions, Modal, TouchableWithoutFeedback} from 'react-native';
import Box from '../Box';
import {useSelector} from 'react-redux';
import {getAccountsSelectorDisplay} from '../../Redux/selectors';
import {useDispatchActions} from '../../Hooks/useDispatchActions';
import * as actions from '../../Redux/actions';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

interface Props {
  childrenForMeasure?: ReactElement;
  childrenInvisible?: ReactElement;
  onClose?: () => void;
  containerHeight?: number;
  lightHandle?: boolean;
}

const PBottomSheet: React.FC<Props> = ({
  children,
  childrenInvisible,
  onClose,
  containerHeight,
  lightHandle = false,
}) => {
  const display = useSelector(getAccountsSelectorDisplay);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const toggleAccountCreator = useDispatchActions(
    actions.toggleAccountSelector,
  );

  const [determineHeight, setDetermineHeight] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [height, setHeight] = useState(containerHeight ?? 0);

  useEffect(() => {
    if (height > 0) {
      setDetermineHeight(false);
      setModalShow(true);
      // open confirm sheet, set delay for better ux on dynamic contents
      setTimeout(() => {
        bottomSheetRef.current?.expand();
      }, 200);
    }
  }, [height]);

  useEffect(() => {
    if (display) {
      setDetermineHeight(true);
    } else {
      setModalShow(false);
      setDetermineHeight(false);
      setHeight(0);
    }
  }, [display]);

  //
  // actions
  //
  const closeSheet = () => {
    bottomSheetRef.current?.close();
    toggleAccountCreator();

    // close modal
    if (onClose) {
      onClose();
    }
  };

  const lightStyle = {width: 50, marginTop: 10};

  //
  // render
  //
  return (
    <>
      {/* hidden view to get height of the content */}
      {determineHeight && (
        <Box
          position="absolute"
          width="100%"
          opacity="0"
          onLayout={(event) => {
            setHeight(event.nativeEvent.layout.height);
          }}>
          {children}
        </Box>
      )}

      {height > 0 && (
        <Modal
          visible={modalShow}
          onRequestClose={closeSheet}
          transparent
          animationType="fade">
          <TouchableWithoutFeedback onPress={closeSheet}>
            <Box
              position="absolute"
              top="0"
              left="0"
              height="100%"
              width="100%"
            />
          </TouchableWithoutFeedback>

          <Box flex={1} backgroundColor="transparent" pointerEvents="box-none">
            <BottomSheet
              handleIndicatorStyle={lightHandle ? lightStyle : {}}
              ref={bottomSheetRef}
              snapPoints={[
                Math.min(
                  height + 48 /* vertical padding*/,
                  SCREEN_HEIGHT * 0.9,
                ),
              ]}
              enableContentPanningGesture={false}
              keyboardBlurBehavior="restore">
              {children}
              {childrenInvisible}
            </BottomSheet>
          </Box>
        </Modal>
      )}
    </>
  );
};

export default PBottomSheet;
