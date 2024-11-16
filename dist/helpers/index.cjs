var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/helpers/index.ts
var helpers_exports = {};
__export(helpers_exports, {
  add_document: () => add_document,
  auth: () => auth,
  calculateBearing: () => calculateBearing,
  collections: () => collections,
  createSelectors: () => createSelectors,
  db: () => db,
  delete_document: () => delete_document,
  displayFormatPhoneNumber: () => displayFormatPhoneNumber,
  extractAlertsData: () => extractAlertsData,
  extractBoardsData: () => extractBoardsData,
  extractCanbusData: () => extractCanbusData,
  extractCarsData: () => extractCarsData,
  extractClientData: () => extractClientData,
  extractLocationData: () => extractLocationData,
  extractSiteData: () => extractSiteData,
  fire_base_TIME_TEMP: () => fire_base_TIME_TEMP,
  formatCarNumber: () => formatCarNumber,
  get_all_documents: () => get_all_documents,
  get_document_by_id: () => get_document_by_id,
  handleChange: () => handleChange,
  handleInvalid: () => handleInvalid,
  handlePaste: () => handlePaste,
  international_israel_phone_format: () => international_israel_phone_format,
  isInternational: () => isInternational,
  isInternationalIsraelPhone: () => isInternationalIsraelPhone,
  local_israel_phone_format: () => local_israel_phone_format,
  query_document: () => query_document,
  query_document_by_conditions: () => query_document_by_conditions,
  query_documents: () => query_documents,
  query_documents_by_conditions: () => query_documents_by_conditions,
  setState: () => setState,
  set_document: () => set_document,
  simpleExtractData: () => simpleExtractData,
  useStoreValues: () => useStoreValues,
  useValidation: () => useValidation
});
module.exports = __toCommonJS(helpers_exports);

// src/helpers/firebase.ts
var import_moment = __toESM(require("moment"), 1);
var import_app = require("firebase/app");
var import_auth = require("firebase/auth");
var import_firestore = require("firebase/firestore");

// src/helpers/cars.ts
var formatCarNumber = (car_number) => {
  var cn = car_number;
  if (cn?.length == 8) return `${cn[0]}${cn[1]}${cn[2]}-${cn[3]}${cn[4]}-${cn[5]}${cn[6]}${cn[7]}`;
  if (cn?.length == 7) return `${cn[0]}${cn[1]}-${cn[2]}${cn[3]}${cn[4]}-${cn[5]}${cn[6]}`;
  if (cn?.length == 6) return `${cn[0]}${cn[1]}-${cn[2]}${cn[3]}-${cn[4]}${cn[5]}`;
  if (cn?.length == 5) return `${cn[0]}-${cn[1]}${cn[2]}-${cn[3]}${cn[4]}`;
  return cn;
};

// src/helpers/firebase.ts
var import_meta = {};
var initApp = () => {
  const isNodeEnv = typeof process !== "undefined" && process.env;
  const firebaseConfig = {
    apiKey: isNodeEnv ? process.env.NEXT_PUBLIC_API_KEY : import_meta.env.VITE_API_KEY,
    authDomain: isNodeEnv ? process.env.NEXT_PUBLIC_AUTH_DOMAIN : import_meta.env.VITE_AUTH_DOMAIN,
    projectId: isNodeEnv ? process.env.NEXT_PUBLIC_PROJECT_ID : import_meta.env.VITE_PROJECT_ID,
    storageBucket: isNodeEnv ? process.env.NEXT_PUBLIC_STORAGE_BUCKET : import_meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: isNodeEnv ? process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID : import_meta.env.VITE_MESSAGING_SENDER_ID,
    appId: isNodeEnv ? process.env.NEXT_PUBLIC_APP_ID : import_meta.env.VITE_APP_ID
  };
  try {
    const app = (0, import_app.initializeApp)(firebaseConfig);
    const auth2 = (0, import_auth.getAuth)(app);
    const db2 = (0, import_firestore.getFirestore)(app);
    return { db: db2, auth: auth2 };
  } catch (error) {
    console.error("Failed to initialize Firebase app:", error);
    return { db: null, auth: null };
  }
};
var { db, auth } = initApp();
var collections = {
  clients: (0, import_firestore.collection)(db, "nx-clients"),
  sites: (0, import_firestore.collection)(db, "nx-sites"),
  cars: (0, import_firestore.collection)(db, "units"),
  users: (0, import_firestore.collection)(db, "nx-users"),
  lastLocations: (0, import_firestore.collection)(db, "last_locations"),
  ermEvents: (0, import_firestore.collection)(db, "erm_events_general"),
  erm2Events: (0, import_firestore.collection)(db, "erm2_events_general"),
  ruptelaEvents: (0, import_firestore.collection)(db, "ruptela_events_general"),
  polygons: (0, import_firestore.collection)(db, "nx-polygons"),
  polygonEvents: (0, import_firestore.collection)(db, "polygon_events"),
  polygonCars: (0, import_firestore.collection)(db, "polygon_cars"),
  canbus: (0, import_firestore.collection)(db, "erm_canbus_parameters"),
  states: (0, import_firestore.collection)(db, "erm_states"),
  app_pro_commands_queue: (0, import_firestore.collection)(db, "app_pro_commands_queue"),
  trips: (0, import_firestore.collection)(db, "erm2_trip"),
  tripsDetails: (0, import_firestore.collection)(db, "erm2_trip_details"),
  audit: (0, import_firestore.collection)(db, "nx-audit"),
  nx_settings: (0, import_firestore.collection)(db, "nx-settings"),
  settings: (0, import_firestore.collection)(db, "settings"),
  translations: (0, import_firestore.collection)(db, "nx-translations"),
  nx_cars: (0, import_firestore.collection)(db, "nx-cars"),
  boards: (0, import_firestore.collection)(db, "boards"),
  protection_types: (0, import_firestore.collection)(db, "protectionTypes"),
  board_types: (0, import_firestore.collection)(db, "boardTypes"),
  charge_capacities: (0, import_firestore.collection)(db, "nx-charge-capacities")
};
var fire_base_TIME_TEMP = import_firestore.Timestamp.now;
var extractAlertsData = (doc2) => {
  const data = doc2.data();
  const { car_number, timestamp } = data;
  return {
    ...data,
    timestamp_seconds: timestamp.seconds,
    timestamp_ui: import_moment.default.unix(timestamp.seconds).format("DD/MM/YY HH:mm"),
    car_number: formatCarNumber(car_number)
  };
};
var simpleExtractData = (doc2) => {
  const docData = doc2.data();
  return {
    ...docData,
    id: doc2.id
  };
};
var extractSiteData = (doc2) => {
  const data = doc2.data();
  const dateUpdated = new Date(data.updated?.seconds * 1e3 + data.updated.nanoseconds / 1e6);
  const dateCreated = new Date(data.created?.seconds * 1e3 + data.created.nanoseconds / 1e6);
  return {
    ...data,
    id: doc2.id,
    created: (0, import_moment.default)(dateCreated).format("DD.MM.YYYY - HH:mm"),
    updated: (0, import_moment.default)(dateUpdated).format("DD.MM.YYYY - HH:mm")
  };
};
var extractClientData = (doc2) => {
  const data = doc2.data();
  const dateUpdated = new Date(data.updated?.seconds * 1e3 + data.updated.nanoseconds / 1e6);
  const dateCreated = new Date(data.created?.seconds * 1e3 + data.created.nanoseconds / 1e6);
  return {
    ...data,
    id: doc2.id,
    created: (0, import_moment.default)(dateCreated).format("HH:mm  DD/MM/YY"),
    updated: (0, import_moment.default)(dateUpdated).format("HH:mm  DD/MM/YY")
  };
};
var extractBoardsData = (doc2) => {
  const data = doc2.data();
  const dateUploaded = typeof data.uploaded === "string" ? data.uploaded : import_moment.default.unix(data.uploaded?.seconds).format("DD/MM/YY HH:mm");
  return {
    ...data,
    id: doc2.id,
    uploaded: dateUploaded
  };
};
var extractCarsData = (doc2) => {
  const carData = doc2.data();
  let icon;
  const gov_info = carData.gov_info;
  if (gov_info) {
    if (carData.icon) {
      icon = carData.icon;
    } else if (gov_info.vehicle_type === "atv") {
      icon = "truck";
    } else if (gov_info.vehicle_type === "motorcycle") {
      icon = "motorcycle";
    } else {
      icon = "car";
    }
  } else {
    icon = "car";
  }
  return {
    ...carData,
    id: doc2.id,
    brand: carData.brand || carData.manufacturer,
    car_number: carData.carId,
    icon
  };
};
var extractCanbusData = (doc2) => {
  const data = doc2.data();
  const newDate = new Date(data.timestamp.seconds * 1e3);
  return {
    ...data,
    date_ui: (0, import_moment.default)(newDate).format("DD/MM/YYYY - HH:mm")
  };
};
var extractLocationData = (doc2) => {
  const locationData = doc2.data();
  const { latitude, longitude, spd, timestamp, prev_latitude, prev_longitude } = locationData;
  return {
    ...locationData,
    id: doc2.id,
    lat: latitude,
    lng: longitude,
    prev_lat: prev_latitude,
    prev_lng: prev_longitude,
    timestamp: timestamp?.seconds,
    spd: Number(spd).toFixed(0)
  };
};
var get_all_documents = async (collection_path) => {
  try {
    const snapshot = await (0, import_firestore.getDocs)((0, import_firestore.collection)(db, collection_path));
    const documents = snapshot.docs.map((doc2) => simpleExtractData(doc2));
    return documents;
  } catch (error) {
    return [];
  }
};
var get_document_by_id = async (collection_path, doc_id) => {
  try {
    const doc_ref = (0, import_firestore.doc)(db, collection_path, doc_id);
    const doc_snap = await (0, import_firestore.getDoc)(doc_ref);
    if (!doc_snap.exists()) {
      throw new Error("Document not found, document id: " + doc_id);
    }
    return simpleExtractData(doc_snap);
  } catch (error) {
    console.error("Error from get_document_by_id", error);
    return null;
  }
};
var set_document = async (collection_path, doc_id, data) => {
  try {
    const doc_ref = (0, import_firestore.doc)(db, collection_path, doc_id);
    await (0, import_firestore.setDoc)(doc_ref, data, { merge: true });
    return true;
  } catch (error) {
    console.error(`Failed to create document by id: ${doc_id} in collection: ${collection_path}`, { error, data });
    return false;
  }
};
var add_document = async (collection_path, data, include_id = false) => {
  try {
    const col_ref = (0, import_firestore.collection)(db, collection_path);
    const doc_ref = await (0, import_firestore.addDoc)(col_ref, data);
    if (include_id) {
      await (0, import_firestore.setDoc)(doc_ref, { ...data, id: doc_ref.id }, { merge: true });
    }
    return true;
  } catch (error) {
    console.error(`Failed to create document in collection: ${collection_path}`, error);
    return false;
  }
};
var delete_document = async (collection_path, doc_id) => {
  try {
    const doc_ref = (0, import_firestore.doc)(db, collection_path, doc_id);
    await (0, import_firestore.deleteDoc)(doc_ref);
    return true;
  } catch (error) {
    console.error(`Failed to delete document with id ${doc_id} from collection ${collection_path}`, error);
    return false;
  }
};
var query_document = async (collection_path, field_name, operator, value, ignore_log = false) => {
  try {
    const q = (0, import_firestore.query)((0, import_firestore.collection)(db, collection_path), (0, import_firestore.where)(field_name, operator, value));
    const query_snapshot = await (0, import_firestore.getDocs)(q);
    const documents = query_snapshot.docs.map((doc2) => simpleExtractData(doc2));
    if (documents.length < 1) {
      throw new Error(
        `No data to return from: 
collection: ${collection_path}, 
field_name: ${field_name}, 
operator: ${operator}, 
value: ${value}`
      );
    }
    return documents[0];
  } catch (error) {
    if (!ignore_log) {
      console.error("Error querying document:", error);
    }
    return null;
  }
};
var query_documents = async (collection_path, field_name, operator, value) => {
  try {
    const q = (0, import_firestore.query)((0, import_firestore.collection)(db, collection_path), (0, import_firestore.where)(field_name, operator, value));
    const query_snapshot = await (0, import_firestore.getDocs)(q);
    const documents = query_snapshot.docs.map((doc2) => simpleExtractData(doc2));
    return documents;
  } catch (error) {
    console.error(`Error querying documents: ${collection_path} - ${field_name} - ${operator} - ${value} `, error);
    return [];
  }
};
var query_documents_by_conditions = async (collection_path, where_conditions) => {
  try {
    let db_query = (0, import_firestore.collection)(db, collection_path);
    where_conditions.forEach((condition) => {
      db_query = (0, import_firestore.query)(db_query, (0, import_firestore.where)(condition.field_name, condition.operator, condition.value));
    });
    const query_snapshot = await (0, import_firestore.getDocs)(db_query);
    const documents = query_snapshot.docs.map((doc2) => simpleExtractData(doc2));
    return documents;
  } catch (error) {
    console.error(`Error querying documents: ${collection_path} - ${JSON.stringify(where_conditions)} `, error);
    return [];
  }
};
var query_document_by_conditions = async (collection_path, where_conditions) => {
  try {
    let db_query = (0, import_firestore.collection)(db, collection_path);
    where_conditions.forEach((condition) => {
      db_query = (0, import_firestore.query)(db_query, (0, import_firestore.where)(condition.field_name, condition.operator, condition.value));
    });
    const query_snapshot = await (0, import_firestore.getDocs)(db_query);
    const documents = query_snapshot.docs.map((doc2) => simpleExtractData(doc2));
    if (!documents[0]) {
      throw new Error("No data returned from DB");
    }
    return documents[0];
  } catch (error) {
    console.error(`Error querying documents: ${collection_path} - ${JSON.stringify(where_conditions)} `, error);
    return null;
  }
};

// src/helpers/global.ts
var calculateBearing = (startLat, startLng, endLat, endLng) => {
  if (startLat === endLat || startLng === endLng) {
    return 0;
  }
  if (startLat === void 0 || startLng === void 0 || endLat === void 0 || endLng === void 0) {
    return 0;
  }
  const startLatRad = startLat * Math.PI / 180;
  const startLngRad = startLng * Math.PI / 180;
  const endLatRad = endLat * Math.PI / 180;
  const endLngRad = endLng * Math.PI / 180;
  const dLon = endLngRad - startLngRad;
  const y = Math.sin(dLon) * Math.cos(endLatRad);
  const x = Math.cos(startLatRad) * Math.sin(endLatRad) - Math.sin(startLatRad) * Math.cos(endLatRad) * Math.cos(dLon);
  const bearing = Math.atan2(y, x) * 180 / Math.PI;
  return (bearing + 360) % 360;
};

// src/helpers/forms.ts
var handleInvalid = (e, requireError) => {
  e.target.setCustomValidity(requireError || "This filed is required !");
};
var handleChange = (e) => {
  e.target.setCustomValidity("");
  const validation = e.target.getAttribute("data-validation");
  if (validation === "text") {
    const cleanedValue = e.target.value.replace(/[^a-zA-Zא-ת\- ]/g, "");
    e.target.value = cleanedValue;
  } else if (validation === "numbers") {
    const cleanedValue = e.target.value.replace(/[^0-9\- +]/g, "");
    e.target.value = cleanedValue;
  } else if (validation === "numbersOnly") {
    const cleanedValue = e.target.value.replace(/[^0-9]/g, "");
    e.target.value = cleanedValue;
  } else if (validation === "price") {
    const cleanedValue = e.target.value.replace(/[^0-9\.]/g, "");
    e.target.value = cleanedValue;
  } else if (validation === "textNumbers") {
    const cleanedValue = e.target.value.replace(/[^a-zA-Zא-ת0-9\- +]/g, "");
    e.target.value = cleanedValue;
  } else if (validation === "email") {
    const cleanedValue = e.target.value.replace(/[^a-zA-Zא-ת0-9.@\- ]/g, "");
    e.target.value = cleanedValue;
  } else if (validation === "color") {
    const cleanedValue = e.target.value.replace(/[^#0-9A-Fa-f]/g, "");
    e.target.value = cleanedValue;
  } else if (validation === "address") {
    const cleanedValue = e.target.value.replace(/[^a-zA-Zא-ת0-9\-., ]/g, "");
    e.target.value = cleanedValue;
  } else if (validation === "cars") {
    const cleanedValue = e.target.value.replace(/[^a-zA-Zא-ת0-9,_]/g, "");
    e.target.value = cleanedValue;
  } else if (validation === "charts") {
    const cleanedValue = e.target.value.replace(/[^a-zA-Zא-ת0-9\-.,_@! ]/g, "");
    e.target.value = cleanedValue;
  } else {
    e.target.value = e.target.value;
  }
};
var handlePaste = (e) => {
  const validation = e.currentTarget.getAttribute("data-validation");
  let pasteData = e.clipboardData.getData("text");
  if (validation === "text") {
    pasteData = pasteData.replace(/[^a-zA-Zא-ת\- ]/g, "");
  } else if (validation === "numbers") {
    pasteData = pasteData.replace(/[^0-9\- +]/g, "");
  } else if (validation === "numbersOnly") {
    pasteData = pasteData.replace(/[^0-9]/g, "");
  } else if (validation === "price") {
    pasteData = pasteData.replace(/[^0-9\.]/g, "");
  } else if (validation === "textNumbers") {
    pasteData = pasteData.replace(/[^a-zA-Zא-ת0-9\- +]/g, "");
  } else if (validation === "email") {
    pasteData = pasteData.replace(/[^a-zA-Zא-ת0-9.@\- ]/g, "");
  } else if (validation === "color") {
    pasteData = pasteData.replace(/[^#0-9A-Fa-f]/g, "");
  } else if (validation === "address") {
    pasteData = pasteData.replace(/[^a-zA-Zא-ת0-9\-., ]/g, "");
  } else if (validation === "cars") {
    pasteData = pasteData.replace(/[^a-zA-Zא-ת0-9,_]/g, "");
  } else if (validation === "charts") {
    pasteData = pasteData.replace(/[^a-zA-Zא-ת0-9\-.,_@! ]/g, "");
  }
  e.preventDefault();
  document.execCommand("insertText", false, pasteData);
};
var useValidation = (validationType, requireError) => {
  return {
    onChange: handleChange,
    onPaste: handlePaste,
    onInvalid: (e) => handleInvalid(e, requireError),
    "data-validation": validationType
  };
};

// src/helpers/store.ts
var setState = (updater, set, stateName) => {
  return set((state) => ({
    [stateName]: typeof updater === "function" ? updater(state[stateName]) : updater
  }));
};
var createSelectors = (store) => {
  let selectors = {};
  for (let k of Object.keys(store.getState())) {
    selectors[k] = () => store((s) => s[k]);
  }
  return selectors;
};
var useStoreValues = (store, keys) => {
  const result = {};
  keys.forEach((key) => {
    result[key] = store.use[key]();
  });
  return result;
};

// src/helpers/phoneNumber.ts
var import_libphonenumber_js = require("libphonenumber-js");
var isInternational = (phone_number) => {
  return phone_number.startsWith("+");
};
var isInternationalIsraelPhone = (phone_number) => {
  return phone_number.startsWith("+9725");
};
var local_israel_phone_format = (international_number) => {
  return international_number.replace("+972", "0");
};
var international_israel_phone_format = (phone) => {
  const validNumber = phone.slice(1, phone.length);
  return "+972".concat(validNumber);
};
var displayFormatPhoneNumber = (phoneNumber) => {
  if (isInternational(phoneNumber)) {
    const phoneNumberObject = (0, import_libphonenumber_js.parsePhoneNumberFromString)(phoneNumber);
    if (!phoneNumberObject) {
      return phoneNumber;
    }
    return phoneNumberObject.formatInternational().replace(/\s/g, "-");
  }
  return phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  add_document,
  auth,
  calculateBearing,
  collections,
  createSelectors,
  db,
  delete_document,
  displayFormatPhoneNumber,
  extractAlertsData,
  extractBoardsData,
  extractCanbusData,
  extractCarsData,
  extractClientData,
  extractLocationData,
  extractSiteData,
  fire_base_TIME_TEMP,
  formatCarNumber,
  get_all_documents,
  get_document_by_id,
  handleChange,
  handleInvalid,
  handlePaste,
  international_israel_phone_format,
  isInternational,
  isInternationalIsraelPhone,
  local_israel_phone_format,
  query_document,
  query_document_by_conditions,
  query_documents,
  query_documents_by_conditions,
  setState,
  set_document,
  simpleExtractData,
  useStoreValues,
  useValidation
});
