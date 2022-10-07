<template lang="">
  <div>
    <CRow>
      <CCol :md="3" class="mt-4">
        <CWidgetStatsD
          class="mb-4 shadow"
          style="--cui-card-cap-bg: #3b5998"
          :values="[{ title: 'Manejo Usuarios', value: '' }]"
        >
          <template #icon>
            <img
              class="card-img-top"
              src="../assets/images/RegistroPersonal.png"
          /></template>
          <template #chart>
            <CChart
              class="position-absolute w-100 h-100"
              type="line"
              :data="{
                labels: [
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                ],
                datasets: [
                  {
                    backgroundColor: 'rgba(255,255,255,.1)',
                    borderColor: 'rgba(255,255,255,.55)',
                    pointHoverBackgroundColor: '#fff',
                    borderWidth: 2,
                    data: [65, 59, 84, 84, 51, 55, 40],
                    fill: true,
                  },
                ],
              }"
              :options="options"
            />
          </template>
        </CWidgetStatsD>
      </CCol>
      <CCol :md="3" class="mt-4">
        <CWidgetStatsD
          class="mb-4 shadow"
          style="--cui-card-cap-bg: #3b5998"
          :values="[{ title: 'Transportación', value: '' }]"
        >
          <template #icon>
            <img class="card-img-top" src="../assets/images/Transportacion.png"
          /></template>
          <template #chart>
            <CChart
              class="position-absolute w-100 h-100"
              type="line"
              :data="{
                labels: [
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                ],
                datasets: [
                  {
                    backgroundColor: 'rgba(255,255,255,.1)',
                    borderColor: 'rgba(255,255,255,.55)',
                    pointHoverBackgroundColor: '#fff',
                    borderWidth: 2,
                    data: [65, 59, 84, 84, 51, 55, 40],
                    fill: true,
                  },
                ],
              }"
              :options="options"
            />
          </template>
        </CWidgetStatsD>
      </CCol>
      <CCol :md="3" class="mt-4">
        <CWidgetStatsD
          class="mb-4 shadow"
          style="--cui-card-cap-bg: #3b5998"
          :values="[{ title: 'Visitas', value: '' }]"
        >
          <template #icon>
            <img class="card-img-top" src="../assets/images/Visitas.png"
          /></template>
          <template #chart>
            <CChart
              class="position-absolute w-100 h-100"
              type="line"
              :data="{
                labels: [
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                ],
                datasets: [
                  {
                    backgroundColor: 'rgba(255,255,255,.1)',
                    borderColor: 'rgba(255,255,255,.55)',
                    pointHoverBackgroundColor: '#fff',
                    borderWidth: 2,
                    data: [65, 59, 84, 84, 51, 55, 40],
                    fill: true,
                  },
                ],
              }"
              :options="options"
            />
          </template>
        </CWidgetStatsD>
      </CCol>
      <CCol :md="3" class="mt-4">
        <CWidgetStatsD
          class="mb-4 shadow"
          style="--cui-card-cap-bg: #3b5998"
          :values="[{ title: 'Viáticos', value: '' }]"
        >
          <template #icon>
            <img class="card-img-top" src="../assets/images/Viatico.png"
          /></template>
          <template #chart>
            <CChart
              class="position-absolute w-100 h-100"
              type="line"
              :data="{
                labels: [
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                ],
                datasets: [
                  {
                    backgroundColor: 'rgba(255,255,255,.1)',
                    borderColor: 'rgba(255,255,255,.55)',
                    pointHoverBackgroundColor: '#fff',
                    borderWidth: 2,
                    data: [65, 59, 84, 84, 51, 55, 40],
                    fill: true,
                  },
                ],
              }"
              :options="options"
            />
          </template>
        </CWidgetStatsD>
      </CCol>
      <CCol :md="3" class="mt-4">
        <CWidgetStatsD
          class="mb-4 shadow"
          style="--cui-card-cap-bg: #3b5998"
          :values="[{ title: 'Caja chica', value: '' }]"
        >
          <template #icon>
            <img class="card-img-top" src="../assets/images/CajaChica.png"
          /></template>
          <template #chart>
            <CChart
              class="position-absolute w-100 h-100"
              type="line"
              :data="{
                labels: [
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                ],
                datasets: [
                  {
                    backgroundColor: 'rgba(255,255,255,.1)',
                    borderColor: 'rgba(255,255,255,.55)',
                    pointHoverBackgroundColor: '#fff',
                    borderWidth: 2,
                    data: [65, 59, 84, 84, 51, 55, 40],
                    fill: true,
                  },
                ],
              }"
              :options="options"
            />
          </template>
        </CWidgetStatsD>
      </CCol>
      <CCol :md="3" class="mt-4">
        <CWidgetStatsD
          class="mb-4 shadow"
          style="--cui-card-cap-bg: #3b5998"
          :values="[{ title: 'Combustibles', value: '' }]"
        >
          <template #icon>
            <img class="card-img-top" src="../assets/images/Combustible.png"
          /></template>
          <template #chart>
            <CChart
              class="position-absolute w-100 h-100"
              type="line"
              :data="{
                labels: [
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                ],
                datasets: [
                  {
                    backgroundColor: 'rgba(255,255,255,.1)',
                    borderColor: 'rgba(255,255,255,.55)',
                    pointHoverBackgroundColor: '#fff',
                    borderWidth: 2,
                    data: [65, 59, 84, 84, 51, 55, 40],
                    fill: true,
                  },
                ],
              }"
              :options="options"
            />
          </template>
        </CWidgetStatsD>
      </CCol>
      <CCol :md="3" class="mt-4">
        <CWidgetStatsD
          class="mb-4 shadow"
          style="--cui-card-cap-bg: #3b5998"
          :values="[{ title: 'Digitalización', value: '' }]"
        >
          <template #icon>
            <img class="card-img-top" src="../assets/images/Digitalizacion.png"
          /></template>
          <template #chart>
            <CChart
              class="position-absolute w-100 h-100"
              type="line"
              :data="{
                labels: [
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                ],
                datasets: [
                  {
                    backgroundColor: 'rgba(255,255,255,.1)',
                    borderColor: 'rgba(255,255,255,.55)',
                    pointHoverBackgroundColor: '#fff',
                    borderWidth: 2,
                    data: [65, 59, 84, 84, 51, 55, 40],
                    fill: true,
                  },
                ],
              }"
              :options="options"
            />
          </template>
        </CWidgetStatsD>
      </CCol>
     
    </CRow>
  </div>
</template>
<script>
import prueba from '../assets/images/logo.png'

export default {
  name: 'Fianciero',
}
</script>
<style lang=""></style>
