using UnityEngine;
using System.Collections;

public class lookAT : MonoBehaviour {

	public Transform target;
	
	void Update() {
		transform.LookAt (target);
	}
}
