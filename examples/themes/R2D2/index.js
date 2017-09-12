import Monet from '../../../'

Monet.create({
  container: {
    borderRadius: 10,
  },
  text: {
    color: 'blue',
  },
}, 'Head')

Monet.create({
  container: {
    borderWidth: 6,
  },
  text: {
    color: 'grey',
  },
}, 'LeftHand')

Monet.create({
  container: {
    borderColor: '#000000',
  },
  text: {
    color: 'black',
  },
}, 'RightHand')
