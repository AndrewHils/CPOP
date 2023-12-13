// src/app/form/form.component.spec.ts
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormComponent } from './form.component';
import { By } from '@angular/platform-browser';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [FormComponent],
        imports: [ReactiveFormsModule, FormsModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form', () => {
    expect(component.form).toBeDefined();
  });
  

  it('should not submit the form with empty fields', () => {
    spyOn(component, 'onSubmit');
    const submitButton = fixture.debugElement.nativeElement.querySelector('button');
    submitButton.click();
    expect(component.onSubmit).not.toHaveBeenCalled();
  });

  it('should have required fields marked', () => {
    const requiredFields = fixture.debugElement.nativeElement.querySelectorAll('[required]');
    expect(requiredFields.length).toBeGreaterThanOrEqual(8);
  });

  it('should have the submit button disabled when not all fields are filled', () => {
    const submitButton = fixture.debugElement.nativeElement.querySelector('button[type="submit"]');
    expect(submitButton.disabled).toBeTruthy();
  });

  it('should have the submit button enabled when all fields are filled', () => { 
    // Simulate user input in the form
    const organizationName = 'Test Organization';
    const cityName = 'Test City';
    const addressValue = 'Test Address';
    const contactName = 'Test Contact';
    const phoneValue = '1234567890';
    const emailValue = 'test@example.com';
    const objectName = 'Test Object';
    const usageAreaValue = 'heating';
  
    const form = fixture.componentInstance.form;
    form.get('organization.name')?.setValue(organizationName);
    form.get('organization.city')?.setValue(cityName);
    form.get('organization.address')?.setValue(addressValue);
    form.get('contactPerson.name')?.setValue(contactName);
    form.get('contactPerson.phone')?.setValue(phoneValue);
    form.get('contactPerson.email')?.setValue(emailValue);
    form.get('objectInfo.name')?.setValue(objectName);
    form.get('objectInfo.usageArea')?.setValue(usageAreaValue);
  
    fixture.detectChanges(); 
    const submitButton = fixture.debugElement.nativeElement.querySelector('button[type="submit"]');
    expect(submitButton.disabled).toBeFalsy();
  });

  it('should receive data from form after submission', () => {
    // Simulate user input in the form
    const organizationName = 'Test Organization';
    const cityName = 'Test City';
    const addressValue = 'Test Address';
    const contactName = 'Test Contact';
    const phoneValue = '1234567890';
    const emailValue = 'test@example.com';
    const objectName = 'Test Object';
    const usageAreaValue = 'heating';
  
    const form = fixture.componentInstance.form;
    form.get('organization.name')?.setValue(organizationName);
    form.get('organization.city')?.setValue(cityName);
    form.get('organization.address')?.setValue(addressValue);
    form.get('contactPerson.name')?.setValue(contactName);
    form.get('contactPerson.phone')?.setValue(phoneValue);
    form.get('contactPerson.email')?.setValue(emailValue);
    form.get('objectInfo.name')?.setValue(objectName);
    form.get('objectInfo.usageArea')?.setValue(usageAreaValue);
  
    fixture.detectChanges();
    const submitButton = fixture.debugElement.nativeElement.querySelector('button[type="submit"]');
    submitButton.click();
    fixture.detectChanges(); 
  
    const submittedData = fixture.componentInstance.submittedData;
  
    expect(submittedData).toEqual({
      organization: {
        name: organizationName,
        city: cityName,
        address: addressValue,
      },
      contactPerson: {
        name: contactName,
        phone: phoneValue,
        email: emailValue,
      },
      objectInfo: {
        name: objectName,
        usageArea: usageAreaValue,
      },
    });
  });

  it('should only accept valid email addresses', () => {
    component.form.get('contactPerson.email')?.markAsTouched();
    component.form.get('contactPerson.email')?.setErrors({ required: true });
    component.form.get('contactPerson.email')?.setValue("invalid.mail")

    fixture.detectChanges();
  
    const emailErrorDiv = fixture.debugElement.nativeElement.querySelector('#email-error2');
    expect(emailErrorDiv.textContent).toContain('Wrong email.');
  });

  it('should show error message for empty email', () => {
    component.form.get('contactPerson.email')?.markAsTouched();
    component.form.get('contactPerson.email')?.setErrors({ required: true });
    component.form.get('contactPerson.email')?.setValue("")

    fixture.detectChanges();
  
    const emailErrorDiv = fixture.debugElement.nativeElement.querySelector('#email-error');
    expect(emailErrorDiv.textContent).toContain('Email is required.');
  });

  it('should show error message for empty name', () => {
    component.form.get('contactPerson.name')?.markAsTouched();
    component.form.get('contactPerson.name')?.setErrors({ required: true });
    component.form.get('contactPerson.name')?.setValue("")

    fixture.detectChanges();
  
    const emailErrorDiv = fixture.debugElement.nativeElement.querySelector('#contactName-error');
    expect(emailErrorDiv.textContent).toContain('Contact Name is required.');
  });

  it('should show error message for empty phone', () => {
    component.form.get('contactPerson.phone')?.markAsTouched();
    component.form.get('contactPerson.phone')?.setErrors({ required: true });
    component.form.get('contactPerson.phone')?.setValue("")

    fixture.detectChanges();
  
    const emailErrorDiv = fixture.debugElement.nativeElement.querySelector('#phone-error');
    expect(emailErrorDiv.textContent).toContain('Phone is required.');
  });

  it('should show error message for empty organization name', () => {
    component.form.get('organization.name')?.markAsTouched();
    component.form.get('organization.name')?.setErrors({ required: true });
    component.form.get('organization.name')?.setValue("")

    fixture.detectChanges();
  
    const emailErrorDiv = fixture.debugElement.nativeElement.querySelector('#name-error');
    expect(emailErrorDiv.textContent).toContain('Name is required.');
  });

  it('should show error message for empty organization city', () => {
    component.form.get('organization.city')?.markAsTouched();
    component.form.get('organization.city')?.setErrors({ required: true });
    component.form.get('organization.city')?.setValue("")

    fixture.detectChanges();
  
    const emailErrorDiv = fixture.debugElement.nativeElement.querySelector('#city-error');
    expect(emailErrorDiv.textContent).toContain('City is required.');
  });

  it('should show error message for empty organization address', () => {
    component.form.get('organization.address')?.markAsTouched();
    component.form.get('organization.address')?.setErrors({ required: true });
    component.form.get('organization.address')?.setValue("")

    fixture.detectChanges();
  
    const emailErrorDiv = fixture.debugElement.nativeElement.querySelector('#address-error');
    expect(emailErrorDiv.textContent).toContain('Address is required.');
  });
  

  it('should show error message for empty objectInfo name', () => {
    component.form.get('objectInfo.name')?.markAsTouched();
    component.form.get('objectInfo.name')?.setErrors({ required: true });
    component.form.get('objectInfo.name')?.setValue("")

    fixture.detectChanges();
  
    const emailErrorDiv = fixture.debugElement.nativeElement.querySelector('#objectName-error');
    expect(emailErrorDiv.textContent).toContain('Object name is required.');
  });

  it('should have the expected options in the dropdown', () => {
    const usageAreaOptions = fixture.debugElement.nativeElement.querySelectorAll('#usageArea option');
    const expectedOptions = ['Heating', 'Ventilation', 'GVS (Hot Water Supply)'];
  
    expectedOptions.forEach((option, index) => {
      expect(usageAreaOptions[index].textContent.trim()).toBe(option);
    });
  });

  it('should have styles applied for error messages', () => {
    component.form.get('contactPerson.email')?.markAsTouched();
    component.form.get('contactPerson.email')?.setErrors({ required: true });

    fixture.detectChanges();

    const emailErrorDiv = fixture.debugElement.query(By.css('#email-error'));

    expect(emailErrorDiv).toBeTruthy();

    const styles = window.getComputedStyle(emailErrorDiv.nativeElement);

    expect(styles.color).toBe('rgb(255, 0, 0)');
    expect(styles.fontSize).toBe('13px'); 
  });
  it('should have styles applied for input messages', () => {
    const emailErrorDiv = fixture.debugElement.query(By.css('#email'));

    expect(emailErrorDiv).toBeTruthy();

    const styles = window.getComputedStyle(emailErrorDiv.nativeElement);

    expect(styles.display).toBe('inline-block'); 
    expect(styles.padding).toBe('8px');
  });
});
  
