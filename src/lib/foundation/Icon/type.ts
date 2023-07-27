interface IIconStrict {
  name: IconName;
  extension?: string;
  height?: number;
  width?: number;
}

interface IIconGeneral {
  name: string;
  extension?: string;
  height?: number;
  width?: number;
}

export type IIcon = IIconStrict | IIconGeneral;

type IconName =
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
