/**
 * @typedef Plant
 * @property {string} name
 * @property {number} id
 * @property {string} image
 * @property {number} quantity
 *
 */

export default function createPlant({ name, id, image, quantity }) {
    return {
        name: name,
        id: id,
        image: image,
        quantity: quantity,
    };
}
