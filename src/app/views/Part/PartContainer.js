// import React, { useEffect } from 'react'
// import axios from 'axios'
// import { withRouter } from 'react-router-dom'

// import { useState } from 'core'
// import { LoadingIndicator } from 'ui'

// import { Part } from './Part'

// const PartContainer = ({ match }) => {
//   const [state, setState] = useState({ loading: true, sentences: [] })
//   const id = match.params.id

//   useEffect(() => {
//     const fetchData = async () => {
//       const sentences = await axios(
//         'http://db.eachclass.net:8000/sentences/?meeting_part__id=' + id
//       )
//       setState({ loading: false, sentences: sentences.data })
//     }
//     fetchData()
//   }, [])

//   if (state.loading) {
//     return <LoadingIndicator />
//   }

//   const props = {
//     sentences: state.sentences
//   }

//   return <Part {...props} />
// }

// export default withRouter(PartContainer)
