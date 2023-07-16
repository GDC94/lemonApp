import React, { FunctionComponent } from "react";
import { ProfileImage, StyledView } from "./profile.styles";
import {
  GestureResponderEvent,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
} from "react-native";

interface ProfileProps {
  imageSource: ImageSourcePropType;
  imgStyle: StyleProp<ImageStyle>;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const Profile: FunctionComponent<ProfileProps> = ({
  imageSource,
  imgStyle,
  onPress,
}) => {
  return (
    <StyledView onPress={onPress}>
      <ProfileImage source={imageSource} style={imgStyle} resizeMode="cover" />
    </StyledView>
  );
};

export default Profile;
