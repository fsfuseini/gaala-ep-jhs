// All photos are imported here once, so components never hard code file paths.
// To add a photo: drop the file into src/assets/images and register it below.
import schoolBlockFront from '../assets/images/school-block-front.jpg';
import schoolCompound from '../assets/images/school-compound.jpg';
import studentsStaffGroup from '../assets/images/students-staff-group.jpg';
import communityGathering from '../assets/images/community-gathering.jpg';
import joynewsFeature from '../assets/images/joynews-anniversary-feature.jpg';

export const photos = {
  schoolBlockFront: {
    src: schoolBlockFront,
    alt: 'A yellow and brown classroom block at Gaala E.P. JHS with shade trees beside it',
  },
  schoolCompound: {
    src: schoolCompound,
    alt: 'The school compound at Tilagbeni, with a classroom block on the left and a second building ahead',
  },
  studentsStaffGroup: {
    src: studentsStaffGroup,
    alt: 'Students in green uniforms seated and standing with teachers and guests on the school compound',
  },
  communityGathering: {
    src: communityGathering,
    alt: 'A man in a striped smock smiling at a gathering outside a school block',
  },
  joynewsFeature: {
    src: joynewsFeature,
    alt: 'Screenshot of a JoyNews interview about Gaala E.P. JHS at 30, beside the anniversary poster',
  },
};

// Slides for the homepage gallery, in display order.
export const gallerySlides = [
  { photo: photos.studentsStaffGroup, caption: 'Students, teachers and guests on the school compound' },
  { photo: photos.schoolCompound, caption: 'The compound at Tilagbeni, with shade trees between the blocks' },
  { photo: photos.schoolBlockFront, caption: 'One of the two classroom blocks' },
  { photo: photos.communityGathering, caption: 'A community gathering outside the school block' },
];
