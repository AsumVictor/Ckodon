
export async function getUndergradReviews() {
    const res = await fetch("/api/uGReviews")
    if (!res.ok) {
        throw {
            message: "Failed to fetch Reaviews", 
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.uGReviews
}

export async function getUsers() {
    const res = await fetch("/api/users")
    if (!res.ok) {
        throw {
            message: "Failed to fetch users", 
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.users
}

export async function getUnderGraduateApplicants() {
    const res = await fetch("/api/underGraduateApplicants")
    if (!res.ok) {
        throw {
            message: "Failed to fetch applicants", 
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.underGraduateApplicants
}

export async function getUser(id) {
    const res = await fetch(`/api/users/${id}`)
    if (!res.ok) {
        throw {
            message: "Failed to fetch applicants", 
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.user
}

export async function getApplicantDeatal_Ug(id) {
    const res = await fetch(`/api/underGraduateApplicants/${id}`)
    if (!res.ok) {
        throw {
            message: "Failed to fetch applicants data", 
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.underGraduateApplicant
}
