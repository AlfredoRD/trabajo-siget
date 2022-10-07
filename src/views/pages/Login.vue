<template>
  <div class="bg-light min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol :md="8">
          <CCardGroup>
            <CCard class="text-white py-5" style="width: 50%">
              <img src="../../../public/LogoTemp.png" />
            </CCard>
            <CCard class="p-5">
              <CCardBody>
                <CForm>
                  <h1>Iniciar Sesion</h1>
                  <p class="text-medium-emphasis"></p>
                  <CInputGroup class="mb-3">
                    <CInputGroupText>
                      <CIcon icon="cil-user" />
                    </CInputGroupText>
                    <CFormInput placeholder="Usuario" autocomplete="Correo" />
                  </CInputGroup>
                  <CInputGroup class="mb-4">
                    <CInputGroupText>
                      <CIcon icon="cil-lock-locked" />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Contraseña"
                      autocomplete="current-password"
                    />
                  </CInputGroup>
                  <CRow>
                    <CCol :xs="6" style="width: 100%" class="text-center">
                      <CButton @click="gotToDashboard" color="primary" class="px-4">
                       Ingresar
                      </CButton>
                    </CCol>
                    <CCol :xs="6" class="text-center" style="width: 100%">
                      <CButton color="link" class="px-0">
                        ¿Olvidaste tu Contraseña?
                      </CButton>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods:{
    gotToDashboard(){this.$router.push({name:'financiero'})},
  }
}
</script>
