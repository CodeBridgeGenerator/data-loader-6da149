
    module.exports = function (app) {
        const modelName = 'invoice';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            no: { type: Number, required: false, max: 10000000 },
invoicetype: { type: Schema.Types.ObjectId, ref: "einvoice_types" },
invoicedateandtime: { type: Date, required: false },
consolidated: { type: Boolean, required: false },
originaleinvoicereferencenumber: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
supplierSname: { type: String, required: true, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
supplierStin: { type: String, required: true, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
supplierSsstregistrationnumber: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
supplierSidentifiertype: { type: Schema.Types.ObjectId, ref: "identify_type" },
supplieridentifiernumber: { type: String, required: true, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
supplierSmsiccode: { type: String, required: true, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
supplierStourismtaxregistrationnumber: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
supplierSbusinessactivitydescription: { type: String, required: true, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
supplierSeMail: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
thefirstsupplierScontactnumber: { type: Schema.Types.ObjectId, ref: "phone_number_prefix" },
supplierScontactnumber: { type: String, required: true, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
suppliercountryname: { type: Schema.Types.ObjectId, ref: "country_code" },
supplierstatename: { type: Schema.Types.ObjectId, ref: "state_code" },
suppliercityname: { type: String, required: true, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
supplierpostalzone: { type: String, required: false, unique: false, lowercase: false, uppercase: false, maxLength: 150, index: true, trim: true },
buyerSname: { type: String, required: true, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
buyerStin: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
buyerSsstregistrationnumber: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
buyeridentifiertype: { type: Schema.Types.ObjectId, ref: "identify_type" },
businessregistrationnumberIdentificationnumberPassportnumber: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
buyerSeMail: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
buyerSaddressCountryname: { type: Schema.Types.ObjectId, ref: "country_code" },
buyerSaddressStatename: { type: Schema.Types.ObjectId, ref: "state_code" },
buyerSaddressCityname: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
buyerSaddressPostalzone: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
thefirstbuyerScontactnumber: { type: Schema.Types.ObjectId, ref: "phone_number_prefix" },
buyerScontactnumber: { type: String, required: true, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
paymentinformationinvoicecurrency: { type: Number, required: false, max: 10000000 },
paymentinformationcurrencyexchangerate: { type: Date, required: false },
paymentinformationfrequencyofbilling: { type: Schema.Types.ObjectId, ref: "frequency_of_billing" },
paymentinformationbillingperiodstartdate: { type: Date, required: false },
paymentinformationbillingperiodenddate: { type: Date, required: false },
paymentinformationpaymentmode: { type: Schema.Types.ObjectId, ref: "payment_mode" },
paymentinformationsupplierSbankaccountnumber: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
paymentinformationpaymentterms: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
paymentinformationprepaymentamount: { type: Number, required: false, min: 0, max: 10000000 },
paymentinformationprepaymentdate: { type: Date, required: false },
paymentinformationprepaymentreferencenumber: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
shippingrecipientSname: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
shippingrecipientSaddresscountryname: { type: Schema.Types.ObjectId, ref: "currency_code" },
shippingrecipientSaddressstatename: { type: Schema.Types.ObjectId, ref: "state_code" },
shippingrecipientSaddresscityname: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
shippingrecipientSaddresspostalzone: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
shippingrecipientStin: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },
shippingrecipientSidentifiertype: { type: Schema.Types.ObjectId, ref: "identify_type" },
shippingrecipientSinformationbusinessregistrationnumberIdentificationnumberPassportnumber: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 1000, index: true, trim: true },

            
            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true }
          },
          {
            timestamps: true
        });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };