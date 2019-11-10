export default class Utils {
  public static mergeObject<T>(base: T, object: T): T {
    for (const key in base) {
      if (!Object.prototype.hasOwnProperty.call(object, key) || typeof object[key] === 'undefined') object[key] = base[key]
      else if (object[key] === Object(object[key])) object[key] = this.mergeObject(base[key], object[key])
    }

    return object
  }
}
