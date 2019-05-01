import { error } from './notifications';

export const isEmptyObject = obj => Object.keys(obj).length === 0;

export const validateProduct = (product) => {
  const errors = {};
  const type_file = product.images[0]? product.images[0].type.slice(0,5) : 'image'
  const type_file2 = product.images[1]? product.images[1].type.slice(0,5) : 'image'
  const type_file3 = product.images[2]? product.images[2].type.slice(0,5) : 'image'
  
  if (type_file !== "image" || type_file2 !== "image" || type_file3 !== "image") {
    errors.images = "Only images must be chosen";
  }else
  if (product.images.length !== 3) {
    errors.images = "Only three images must be chosen";
  }

  if (product.name === '') {
    errors.name = 'You must enter a name';
  }

  if (product.description === '') {
    errors.description = 'You must enter some description';
  }

  if (product.price === '') {
    errors.price = 'You must enter a price';
  }

  if (product.section === '') {
    errors.section = 'You must choose one section';
  }

  if (product.category_id === '') {
    errors.category_id = 'You must choose one category';
  }

  return errors;
}

export const handleAjaxError = (err) => {
  error('Something went wrong');
  console.warn(err);
};
