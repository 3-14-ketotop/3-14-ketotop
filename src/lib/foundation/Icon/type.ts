export interface ICommon {
  extension?: string;
  $height?: number | undefined;
  $width?: number | undefined;
  $iconSize?: number | undefined;
}

interface IIconStrict extends ICommon {
  name: IconName;
}

interface IIconGeneral extends ICommon {
  name: string;
}

export type IIcon = IIconStrict | IIconGeneral;

export type IconName =
  | 'add_24px'
  | 'arrowmore_24px'
  | 'back_24px'
  | 'back_small_24px'
  | 'bin_24px'
  | 'calendar_24px'
  | 'centerinfo_24px'
  | 'close_24px'
  | 'comment_24px'
  | 'delete_24px'
  | 'delete_small_24px'
  | 'document_24px'
  | 'down_24px'
  | 'drop_less_24px'
  | 'drop_more_24px'
  | 'drop_more_gray_24px'
  | 'edit_24px'
  | 'half_star_24px'
  | 'help_24px'
  | 'less_small_24px'
  | 'media_delete_24px'
  | 'message_24px'
  | 'more_small_24px'
  | 'more_vert_24px'
  | 'next_small_24px'
  | 'notice_24px'
  | 'playcircle_24px'
  | 'redo_24px'
  | 'reset_24px'
  | 'search_24px'
  | 'search_delete_24px'
  | 'setting_24px'
  | 'star_off_24px'
  | 'star_on_24px'
  | 'time_24px'
  | 'undo_24px'
  | 'up_24px'
  | 'videoform_24px'
  | 'visibility_off_24px'
  | 'visibility_on_24px'
  | 'thumbnails_checkcircle_24px'
  | 'thumbnails_deletecircle_24px'
  | 'thumbnails_errorcircle_24px'
  | 'thumbnails_playcircle_24px'
  | 'videocam_40px'
  | 'appbar_center_24px'
  | 'appbar_center_gray_24px'
  | 'appbar_home_24px'
  | 'appbar_home_gray_24px'
  | 'appbar_mypage_24px'
  | 'appbar_mypage_gray_24px'
  | 'appbar_patient_24px'
  | 'appbar_patient_gray_24px'
  | 'appbar_reserve_24px'
  | 'appbar_reserve_gray_24px'
  // 아래는 변경 후 삭제 예정
  | 'notice'
  | 'search'
  | 'close'
  | 'back'
  | 'drop_more'
  | 'drop_less'
  | 'add'
  | 'deletecircle_gray'
  | 'delete'
  | 'more_vert'
  | 'arrow_more'
  | 'visibility_on'
  | 'visibility_off'
  | 'half_star'
  | 'star_on'
  | 'star_off'
  | 'comment'
  | 'videoform'
  | 'edit'
  | 'message'
  | 'document'
  | 'undo'
  | 'redo'
  | 'reset'
  | 'delete_small'
  | 'time'
  | 'back_small'
  | 'next_small'
  | 'more_small'
  | 'less_small'
  | 'calendar'
  | 'setting'
  | 'filter'
  | 'centerinfo'
  | 'help'
  | 'up'
  | 'down'
  | 'bin'
  | 'thumbnails_checkcircle'
  | 'thumbnails_deletecircle'
  | 'thumbnails_playcircle'
  | 'thumbnails_errorcircle'
  | 'appbar_center'
  | 'appbar_center_gray'
  | 'appbar_home'
  | 'appbar_home_gray'
  | 'appbar_mypage'
  | 'appbar_mypage_gray'
  | 'appbar_patient'
  | 'appbar_patient_gray'
  | 'appbar_reserve'
  | 'appbar_reserve_gray';
