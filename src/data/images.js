// All photos are imported here once, so components never hard code file paths.
// To add a photo: drop the file into src/assets/images (or a subfolder) and
// register it below.
import schoolBlockFront from '../assets/images/school-block-front.jpg';
import schoolCompound from '../assets/images/school-compound.jpg';
import studentsStaffGroup from '../assets/images/students-staff-group.jpg';
import communityGathering from '../assets/images/community-gathering.jpg';
import joynewsFeature from '../assets/images/joynews-anniversary-feature.jpg';

import launchKeynote from '../assets/images/gallery/launch-keynote.jpg';
import launchRemarks from '../assets/images/gallery/launch-remarks.jpg';
import launchAudience1 from '../assets/images/gallery/launch-audience-1.jpg';
import launchChoir from '../assets/images/gallery/launch-choir.jpg';
import launchDrummingGroup from '../assets/images/gallery/launch-drumming-group.jpg';
import launchDancing from '../assets/images/gallery/launch-dancing.jpg';
import launchStudentsSeated from '../assets/images/gallery/launch-students-seated.jpg';
import launchGuestsSeated from '../assets/images/gallery/launch-guests-seated.jpg';
import launchAddress from '../assets/images/gallery/launch-address.jpg';
import launchStaffLine from '../assets/images/gallery/launch-staff-line.jpg';

import patronJohnsonLibeNaapi from '../assets/images/people/patron-johnson-libe-naapi.jpg';
import chairmanNicholasUniyagnanJawol from '../assets/images/people/chairman-nicholas-uniyagnan-jawol.jpg';
import viceChairmanSalifuAli from '../assets/images/people/vice-chairman-salifu-ali.jpg';
import secretaryWilliamNlanjerborJalulah from '../assets/images/people/secretary-william-nlanjerbor-jalulah.jpg';

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
  launchKeynote: {
    src: launchKeynote,
    alt: 'A man in a red patterned shirt speaking at a lectern during the Gaala@30 anniversary launch',
  },
  launchRemarks: {
    src: launchRemarks,
    alt: 'A man in a blue and orange tie-dye shirt reading notes at the lectern during the anniversary launch',
  },
  launchAudience1: {
    src: launchAudience1,
    alt: 'Guests seated under trees listening during the Gaala@30 anniversary launch',
  },
  launchChoir: {
    src: launchChoir,
    alt: 'Students in green dresses singing during the anniversary launch programme',
  },
  launchDrummingGroup: {
    src: launchDrummingGroup,
    alt: 'Students in green uniforms gathered with drummers under trees at the anniversary launch',
  },
  launchDancing: {
    src: launchDancing,
    alt: 'Guests and a student dancing together on the school compound during the anniversary launch',
  },
  launchStudentsSeated: {
    src: launchStudentsSeated,
    alt: 'Rows of students in green uniforms seated on wooden benches at the anniversary launch',
  },
  launchGuestsSeated: {
    src: launchGuestsSeated,
    alt: 'Guests seated in a row beside a classroom block during the anniversary launch',
  },
  launchAddress: {
    src: launchAddress,
    alt: 'A man in a white shirt addressing guests beside the lectern at the anniversary launch',
  },
  launchStaffLine: {
    src: launchStaffLine,
    alt: 'Staff and guests seated in a line beside the school block during the anniversary launch',
  },
  patronJohnsonLibeNaapi: {
    src: patronJohnsonLibeNaapi,
    alt: 'Portrait of Johnson Libe Naapi, Patron of the Gaala E.P. JHS Alumni Association',
  },
  chairmanNicholasUniyagnanJawol: {
    src: chairmanNicholasUniyagnanJawol,
    alt: 'Portrait of Nicholas Uniyagnan Jawol, Chairman of the Gaala E.P. JHS Alumni Association',
  },
  viceChairmanSalifuAli: {
    src: viceChairmanSalifuAli,
    alt: 'Portrait of Salifu Ali Esq., Vice Chairman of the Gaala E.P. JHS Alumni Association',
  },
  secretaryWilliamNlanjerborJalulah: {
    src: secretaryWilliamNlanjerborJalulah,
    alt: 'Portrait of William Nlanjerbor Jalulah, Secretary of the Gaala E.P. JHS Alumni Association',
  },
};

// Slides for the homepage gallery, in display order.
export const gallerySlides = [
  { photo: photos.launchKeynote, caption: 'Keynote address at the Gaala@30 anniversary launch' },
  { photo: photos.launchChoir, caption: 'Students performing at the anniversary launch' },
  { photo: photos.studentsStaffGroup, caption: 'Students, teachers and guests on the school compound' },
  { photo: photos.launchDrummingGroup, caption: 'Students and drummers gathered for the launch programme' },
  { photo: photos.launchDancing, caption: 'Guests and students dancing during the celebrations' },
  { photo: photos.launchAudience1, caption: 'Guests at the Gaala@30 anniversary launch' },
  { photo: photos.schoolCompound, caption: 'The compound at Tilagbeni, with shade trees between the blocks' },
  { photo: photos.launchStudentsSeated, caption: 'Students seated for the anniversary launch programme' },
  { photo: photos.launchAddress, caption: 'Remarks during the anniversary launch' },
  { photo: photos.launchGuestsSeated, caption: 'Guests seated beside the classroom block' },
  { photo: photos.schoolBlockFront, caption: 'One of the two classroom blocks' },
  { photo: photos.launchStaffLine, caption: 'Staff and guests at the anniversary launch' },
];
